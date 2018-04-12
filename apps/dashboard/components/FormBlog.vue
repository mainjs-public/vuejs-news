<template>
    <div>
        <section class="content-header">
            <h1>
                {{ data.id ? "Edit" : "Add"}}
            </h1>
            <ol class="breadcrumb">
                <li><a href="/"><i class="fa fa-dashboard"></i> Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li class="active">{{data.id ? "Edit" : "Add"}}</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div>
                            <div class="box-header with-border">
                                <h3 class="box-title">{{data.id ? "Edit blog" : "Add blog"}}</h3>
                            </div>
                            <!-- /.box-header -->
                            <!-- form start -->
                            <form class="form-horizontal">
                                <div class="box-body">
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Category</label>
                                        <div class="col-sm-11">
                                            <select class="form-control" v-model="data.category">
                                                <option :value="''">None</option>
                                                <option v-for="category of categories" v-bind:key="category.id" :value="category.id">{{category.name}}</option>
                                            </select>
                                        </div>
                                    </div>
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
                                            <input v-model="data.image" type="text" class="form-control" placeholder="Image"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Description</label>

                                        <div class="col-sm-11">
                                            <input v-model="data.description" type="text" class="form-control" placeholder="Description">
                                            <!--<label class="help-block" v-if="error.description">{{error.description}}</label>-->
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Content</label>

                                        <div class="col-sm-11">
                                            <quill-editor ref="myTextEditor"
                                                          v-model="data.content"
                                                          :options="editorOption"
                                            >
                                            </quill-editor>
                                            <!--<label class="help-block" v-if="error.content">{{error.content}}</label>-->
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Tags</label>

                                        <div class="col-sm-11">
                                            <input v-model="data.string_tags" type="text" class="form-control" placeholder="Content">
                                            <!--<label class="help-block" v-if="error.content">{{error.content}}</label>-->
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Status</label>
                                        <div class="col-sm-11">
                                            <select class="form-control" v-model="data.status">
                                                <option :value="true">True</option>
                                                <option :value="false">False</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <!-- /.box-body -->
                                <div class="box-footer">
                                    <button type="submit" class="btn btn-default">Cancel</button>
                                    <button type="submit" class="btn btn-info pull-right" @click="clickButton">Submit</button>
                                </div>
                                <!-- /.box-footer -->
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import { query } from '~/apollo/queries/category.js';
  export default {
    props: ['data', 'onClick'],
    data() {
      return {
        error: {},
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
    },
    methods: {
      clickButton(e) {
        this.onClick(this.data);
        e.preventDefault();
      },
    },
    data() {
      return {
        categories: []
      }
    },
    mounted() {
      const client = this.$apollo.getClient();
      client.query({ query: query })
        .then((res) => res.data)
        .then(data => {
            this.categories = data.categories;
        });
    }
  }
</script>
