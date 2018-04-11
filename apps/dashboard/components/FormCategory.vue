<template>
    <div>
        <section class="content-header">
            <h1>
                {{data.id ? "Edit" : "Add"}}
            </h1>
            <ol class="breadcrumb">
                <li><a href="/"><i class="fa fa-dashboard"></i> Home</a></li>
                <li><a href="/category">Category</a></li>
                <li class="active">{{data.id ? "Edit" : "Add"}}</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div>
                            <div class="box-header with-border">
                                <h3 class="box-title">{{data.id ? "Edit Category" : "Add Category"}}</h3>
                            </div>
                            <!-- /.box-header -->
                            <!-- form start -->
                            <form class="form-horizontal">
                                <div class="box-body">
                                    <div class="form-group" v-bind:class="{ 'has-error': error.name ? true : false }">
                                        <label class="col-sm-1 control-label">Name</label>

                                        <div class="col-sm-11">
                                            <input v-model="data.name" type="text" class="form-control" placeholder="Name"/>
                                            <label class="help-block" v-if="error.name">{{error.name}}</label>
                                        </div>
                                    </div>
                                    <div class="form-group" v-bind:class="{ 'has-error': error.slug ? true : false }">
                                        <label class="col-sm-1 control-label">Slug</label>

                                        <div class="col-sm-11">
                                            <input v-model="data.slug" type="text" class="form-control" placeholder="Slug"/>
                                            <label class="help-block" v-if="error.slug">{{error.slug}}</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Image</label>

                                        <div class="col-sm-11">
                                            <input v-model="data.image" type="text" class="form-control" placeholder="Image"/>
                                        </div>
                                    </div>
                                    <div class="form-group" v-bind:class="{ 'has-error': error.description ? true : false }">
                                        <label class="col-sm-1 control-label">Description</label>

                                        <div class="col-sm-11">
                                            <input v-model="data.description" type="text" class="form-control" placeholder="Description">
                                            <label class="help-block" v-if="error.description">{{error.description}}</label>
                                        </div>
                                    </div>
                                    <div class="form-group" v-bind:class="{ 'has-error': error.content ? true : false }">
                                        <label class="col-sm-1 control-label">Content</label>

                                        <div class="col-sm-11">
                                            <input v-model="data.content" type="text" class="form-control" placeholder="Content">
                                            <label class="help-block" v-if="error.content">{{error.content}}</label>
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
                                    <button type="submit" class="btn btn-info pull-right" @click="onClick">Submit</button>
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
  // import { addCategory } from '~/query/category.js'
  export default {
    props: ['data', 'onClick'],
    data() {
        return {
            error: {},
        }
    }
  }
</script>
