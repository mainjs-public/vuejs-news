<template>
    <div>
        <section class="content-header">
            <h1>
                {{ data.id ? "Edit" : "Add"}}
            </h1>
            <ol class="breadcrumb">
                <li><nuxt-link to="/"><i class="fa fa-dashboard"></i> Home</nuxt-link></li>
                <li><nuxt-link to="/catalog/category">Catalog</nuxt-link></li>
                <li><nuxt-link to="/catalog/page">Page</nuxt-link></li>
                <li class="active">{{data.id ? "Edit" : "Add"}}</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div>
                            <div class="box-header with-border">
                                <h3 class="box-title">{{data.id ? "Edit page" : "Add page"}}</h3>
                                <div class="pull-right">
                                    <nuxt-link class="btn btn-default" style="margin-left: 10px; margin-right: 10px" to="/catalog/page">Back</nuxt-link>
                                    <button type="submit" class="btn btn-info" @click="clickButton($event)">
                                        <i class="fa fa-circle-o-notch fa-spin" v-if="loading"></i>
                                        Save
                                    </button>
                                </div>
                            </div>
                            <!-- /.box-header -->
                            <div class="alert alert-danger alert-dismissible" style="margin: 0px 10px" v-if="error.message">
                                <h4><i class="icon fa fa-ban"></i> Alert!</h4>
                                {{error.message}}
                            </div>
                            <!-- form start -->
                            <form class="form-horizontal">
                                <div class="box-body">
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Name</label>

                                        <div class="col-sm-11">
                                            <input v-model="data.name" type="text" class="form-control" placeholder="Name"/>
                                            <!--<label class="help-block" v-if="error.name">{{error.name}}</label>-->
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Slug</label>

                                        <div class="col-sm-11">
                                            <input v-model="data.slug" type="text" class="form-control" placeholder="Slug"/>
                                            <!--<label class="help-block" v-if="error.slug">{{error.slug}}</label>-->
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Image</label>

                                        <div class="col-sm-11">
                                            <image-manager id="image" inputName="image" :value="data.image" :onChange="image => this.data.image = image" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Description</label>

                                        <div class="col-sm-11">
                                            <textarea v-model="data.description" class="form-control" placeholder="Description" style="min-height: 150px"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Content</label>

                                        <div class="col-sm-11">
                                            <quill-editor ref="myTextEditor"
                                                          v-model="data.content"
                                                          :options="editorOption"
                                                          style="display: inline-block; height: 20rem"
                                            >
                                            </quill-editor>
                                            <!--<label class="help-block" v-if="error.content">{{error.content}}</label>-->
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Status</label>
                                        <div class="col-sm-11">
                                            <switch-botton :value="data.status" :onChange="changeStatus"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import ImageManager from './ImageManager.vue';
  import SwitchBotton from './SwitchBotton.vue';
  export default {
    props: ['data', 'onClick'],
    data() {
      return {
        editorOption: {
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }],
              ['clean'],
              ['link', 'image', 'video']
            ],
            syntax: {
              highlight: text => hljs.highlightAuto(text).value
            }
          }
        }
      }
    },
    computed: {
      editor() {
        return this.$refs.myTextEditor.quill
      },
      loading () { return this.$store.state.page.loading },
      error () { return this.$store.state.page.error }
    },
    components: {
      ImageManager,
      SwitchBotton,
    },
    methods: {
      changeStatus(value){
        this.data.status = value;
      },
      clickButton(event) {
        this.onClick(event);
      }
    }
  }
</script>
