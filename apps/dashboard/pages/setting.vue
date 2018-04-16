<template>
    <div>
        <section class="content-header">
            <h1>
                Setting
            </h1>
            <ol class="breadcrumb">
                <li><nuxt-link to="/"><i class="fa fa-dashboard"></i> Home</nuxt-link></li>
                <li class="active">Setting</li>
            </ol>
        </section>
        {{site_name}}
        {{side_description}}
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div>
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
                                            <input v-model="site_name" type="text" class="form-control" placeholder="Name"/>
                                            <!--<label class="help-block" v-if="error.name">{{error.name}}</label>-->
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Content</label>

                                        <div class="col-sm-11">
                                            <quill-editor ref="myTextEditor"
                                                          v-model="side_description"
                                                          :options="editorOption"
                                                          style="display: inline-block; height: 20rem"
                                            >
                                            </quill-editor>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="box-header with-border">
                                <div class="pull-right">
                                    <button type="submit" class="btn btn-info" @click="onClick($event)">
                                        <i class="fa fa-circle-o-notch fa-spin" v-if="loading"></i>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        error: {},
        loading: false,
        site_name: '',
        side_description: '',
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
      onClick(e) {
        e.preventDefault();
      }
    }
  }
</script>

<style scoped>

</style>
