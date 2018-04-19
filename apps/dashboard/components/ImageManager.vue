<template>

    <div class="custom-image">
        <div class="image-manager-thumb img-thumbnail" v-bind:style="{width: '100px', height: '100px'}">
            <img class="image-manager-thumb_image" :src="previewImage">
            <div class="image-manager-thumb_action">
                <a class="btn btn-success btn-xs" @click="openModal" data-toggle="modal" :href="'#' + id">
                    <i class="fa fa-picture-o" aria-hidden="true"></i>
                </a>
                <a href="#"
                   class="btn btn-danger btn-xs"
                   role="button"
                   @click.prevent="clearImage"
                >
                    <i class="fa fa-times" aria-hidden="true"></i>
                </a>
            </div>
            <input type="hidden" :name="inputName" v-model="image_name">
        </div>

        <div class="modal fade" :id="id">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title">Image manage</h4>
                    </div>
                    <div class="modal-body image-manager">

                        <div class="clearfix well">
                            <div class="pull-left">

                                <ol class="breadcrumb">
                                    <li v-for="breadcrumb in breadcrumbs">
                                        <a href="#" @click.prevent="loadImage(breadcrumb)">{{ breadcrumb.name }}</a>
                                    </li>
                                </ol>

                            </div>

                            <button type="button"
                                    class="btn btn-success pull-right btn-xs"
                                    v-on:click="uploadImage"
                            >
                                Upload Image
                            </button>

                            <button type="button"
                                    class="btn btn-danger pull-right btn-xs"
                                    v-on:click="clearCache"
                                    v-bind:style="{marginRight: '10px'}"
                            >
                                Clear Cache
                            </button>

                            <button type="button"
                                    :id="id + 'refesh'"
                                    class="btn btn-warning pull-right btn-xs"
                                    v-bind:style="{marginRight: '10px'}"
                                    v-on:click="fetchImage">
                                Refresh
                            </button>
                        </div>

                        <div class="row">

                            <div class="col-xs-3">
                                <ul class="list-group">
                                    <li class="list-group-item" v-for="folder in folders">
                                        <a href="#" @click.prevent="">
                                            <span @click.prevent="loadImage(folder)">{{ folder.name }}</span>
                                            <i class="fa fa-trash pull-right"
                                               aria-hidden="true"
                                               @click.prevent="deleteFolder(folder.id)"></i>
                                        </a>
                                    </li>
                                    <li :class="setActive">
                                        <input @click.prevent="add_dir = true"
                                               type="text"
                                               v-model="name"
                                               class="form-control"
                                               placeholder="Add Folder..."
                                               @keyup.enter.prevent="addFolder"
                                        >
                                        <div v-if="add_dir">
                                            <button class="btn btn-success btn-xs" type="button" @click="addFolder">
                                                <i class="fa fa-floppy-o" aria-hidden="true"></i>
                                            </button>

                                            <button class="btn btn-link btn-xs"
                                                    type="button"
                                                    @click="add_dir = false">
                                                <i class="fa fa-remove" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </li>
                                </ul>

                            </div>

                            <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                <div class="well image-manager-view">
                                    <div class="row" v-if="imagesByFolderId.length > 0">
                                        <div class="col-xs-3" v-for="(img, i) in imagesByFolderId">
                                            <div class="image-manager-thumb img-thumbnail">
                                                <img class="image-manager-thumb_image" :src="img.thumb">
                                                <div class="image-manager-thumb_action">
                                                    <a @click.prevent="selectImage(img.path)" href="#"
                                                       class="btn btn-success btn-xs" role="button">
                                                        <i class="fa fa-check" aria-hidden="true"></i>
                                                    </a>
                                                    <a @click.privent="deleteImage(img.id)" href="#"
                                                       class="btn btn-danger btn-xs" role="button">
                                                        <i class="fa fa-times" aria-hidden="true"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="image-manager-thumb_name">
                                                <span @click="index = i" v-if="index !== i">{{ img.name }}</span>
                                                <input v-else
                                                       @keyup.enter="renameImage(img.image, img.ext,  $event)"
                                                       type="text"
                                                       :value="img.filename"
                                                       @blur="renameImage(img.image, img.ext, $event)"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row" v-else>No Images</div>
                                </div>
                            </div>
                        </div>

                        <div v-if="errors.length" class="alert alert-danger  alert-dismissible" role="alert">
                            <button type="button" class="close" @click="errors = []"><span aria-hidden="true">×</span>
                            </button>
                            <ul class="list-unstyled">
                                <li v-for="error in errors">{{ error }}</li>
                            </ul>
                            <span class="pull-right">{{ second }}</span>
                        </div>

                        <div v-if="success.length" class="alert alert-success  alert-dismissible" role="alert">
                            <button type="button" class="close" @click="success = []"><span aria-hidden="true">×</span>
                            </button>
                            <ul class="list-unstyled">
                                <li v-for="s in success">{{ s }}</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
  import kebabCase from 'lodash/kebabCase';
  import request from '~/config/axios';
  import {API_URL} from '~/config/api';
  import {query, deleteFolder, createFolder} from '~/apollo/queries/folder';
  import {query as queryImage, deleteImage} from '~/apollo/queries/image';

  export default {

    data: function () {
      return {
        index: 0,
        name: '',
        image_name: '',
        add_dir: false,
        errors: [],
        success: [],
        folders: [],
        folder: {
          path: 'images',
          id: 'null',
        },
        imagesByFolderId: [],
        uploadKey: 0,
      }
    },

    apollo: {
      folders: {
        query: query,
      },
      imagesByFolderId: {
        query: queryImage,
        variables() {
          return {
            folder_id: this.folder.id,
            key: this.uploadKey
          }
        },
        update(data) {
          let images = data.imagesByFolderId;
          images = images.map(i => ({...i, thumb: `${API_URL}${i.path}`}));
          return images;
        },
      }
    },

    props: ['id', 'inputName', 'value', 'onChange'],

    computed: {
      breadcrumbs: function () {

        // var breadcrumbs = this.folder.path.split('/');
        //
        // var current = [];
        //
        // return breadcrumbs.map(function (breadcrumb, index) {
        //
        //   current.push(breadcrumb);
        //
        //   var li = {
        //     name: breadcrumb,
        //     path: current.join('/')
        //   }
        //
        //   return li;
        //
        // });

        const li = {
          name: "Images",
          path: "image",
          id: 'null',

        };
        return [li];

      },
      setActive: function () {
        if (this.add_dir) return "list-group-item";
        return "not-active list-group-item";
      },
      previewImage: function () {
        return this.value ? `${API_URL}${this.value}` : require('~/assets/no-image.svg');
      }
    },

    methods: {

      clearImage: function () {
        this.onChange("");
      },

      deleteImage: function (id) {
        this.$apollo.mutate({
          mutation: deleteImage,
          variables: {
            input: {
              id
            }
          }
        }).then(() => this.uploadKey++);
      },

      renameImage: function (old, ext, e) {

      },

      addFolder: function (e) {
        e.preventDefault();
        this.$apollo.mutate({
          mutation: createFolder,
          variables: {
            input: {
              name: this.name,
              path: `images/${kebabCase(this.name)}`,
            }
          },
          refetchQueries: [{
            query: query,
          }]
        });
      },

      deleteFolder: function (id) {
        this.$apollo.mutate({
          mutation: deleteFolder,
          variables: {
            input: {
              id
            }
          },
          refetchQueries: [{
            query: query,
          }]
        })
      },

      uploadImage: function () {
        // Create input upload
        const input = document.createElement("input");
        input.setAttribute('type', "file");
        input.setAttribute('name', "files");
        input.setAttribute('multiple', '');
        input.click();
        input.addEventListener('change', this.chooseFiles, false);

        this.input = input;

        // Append to body
        document.getElementsByTagName('body')[0].appendChild(this.input);

        // Remove Input when focus body
        document.body.onfocus = this.clearFocus();
      },

      clearFocus: function () {
        document.getElementsByTagName('body')[0].removeChild(this.input);
        document.body.onfocus = null;
      },

      chooseFiles: function (e) {

        const images = e.target.files || e.dataTransfer.files;

        if (images && images.length) {

          // Create form data
          const formData = new FormData();
          for (let i = 0; i < images.length; i++) {
            let file = images[i];
            formData.set('file[' + file.name + ']', file);
          }

          formData.set('path', this.folder.path);
          formData.set('folder_id', this.folder.id);

          request.post('upload', formData)
            .then(res => {
              this.uploadKey++;
          }).catch(e => console.log(e));
        }
      },

      // Load image in folder
      loadImage: function (folder) {
        this.folder = folder;
      },

      fetchImage: function () {

      },

      openModal: function () {
        // this.fetchData();
        // this.fetchImage();
      },

      clearCache: function () {

      },

      selectImage(path) {
        this.onChange(path);
        $(`#${this.id}`).modal('hide');
      }
    }
  }
</script>

<style lang="stylus">

    .not-active
        .form-control
            border: none
            margin: 0

    .image-manager
        .row
            margin-left: -5px
            margin-right: -5px
            > div
                padding-left: 5px
                padding-right: 5px

        .well
            padding: 10px

        .breadcrumb
            margin-bottom 0px

    .image-manager-view
    .image-manager-thumb
        margin-bottom 10px
        position relative

    .image-manager-thumb_image
        width 100%
        height 90px

    .image-manager-thumb_action
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        display flex
        align-items center
        justify-content center

    .image-manager-thumb_action
        &:hover
            a
                display block

    .image-manager-thumb_action
        a
            display none
            margin 5px

    .image-manager-thumb_name
        height 40px

    .image-manager-thumb_name
        input
            border none
            width 100%
</style>
