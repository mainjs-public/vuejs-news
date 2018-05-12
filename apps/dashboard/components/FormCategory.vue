<template>
    <div>
        <section class="content-header">
            <h1>
                {{ data.id ? "Edit" : "Add"}}
            </h1>
            <ol class="breadcrumb">
                <li><nuxt-link to="/"><i class="fa fa-dashboard"></i> Home</nuxt-link></li>
                <li><nuxt-link to="/catalog/category">Catalog</nuxt-link></li>
                <li><nuxt-link to="/catalog/category">Category</nuxt-link></li>
                <li class="active">{{data.id ? "Edit" : "Add"}}</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div>
                            <div class="box-header with-border">
                                <h3 class="box-title">{{data.id ? "Edit category" : "Add category"}}</h3>
                                <div class="pull-right">
                                    <nuxt-link class="btn btn-default" style="margin-right: 10px" to="/catalog/category">Back</nuxt-link>
                                    <button type="submit" class="btn btn-info" @click="onClick($event)">
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
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Slug</label>

                                        <div class="col-sm-11">
                                            <input v-model="data.slug" type="text" class="form-control" placeholder="Slug"/>
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
  // import { addCategory } from '~/query/category.js'
  import ImageManager from './ImageManager.vue';
  import SwitchBotton from './SwitchBotton.vue';
  export default {
    props: ['data', 'onClick'],
    computed: {
      editor() {
        return this.$refs.myTextEditor.quill
      },
      loading () { return this.$store.state.category.loading },
      error () { return this.$store.state.category.error }
    },
    components: {
      ImageManager,
      SwitchBotton
    },
    methods: {
      changeStatus(value){
        this.data.status = value;
      }
    }
  }
</script>
