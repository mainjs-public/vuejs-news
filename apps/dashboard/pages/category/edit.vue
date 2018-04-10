<template>
    <div>
        <section class="content-header">
            <h1>
                Add categories
                <!--<small>advanced tables</small>-->
            </h1>
            <ol class="breadcrumb">
                <li><a href="/"><i class="fa fa-dashboard"></i> Home</a></li>
                <li><a href="/category">Category</a></li>
                <li class="active">Add categories</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div>
                            <div class="box-header with-border">
                                <h3 class="box-title">Form Add Category</h3>
                            </div>
                            <!-- /.box-header -->
                            <!-- form start -->
                            <form class="form-horizontal">
                                <div class="box-body">
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Name</label>

                                        <div class="col-sm-11">
                                            <input v-model="name" type="text" class="form-control" placeholder="Name">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Slug</label>

                                        <div class="col-sm-11">
                                            <input v-model="slug" type="text" class="form-control" placeholder="Slug">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Image</label>

                                        <div class="col-sm-11">
                                            <!--<input type="file" v-model="image" v-on:change="onchange">-->
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Description</label>

                                        <div class="col-sm-11">
                                            <input v-model="description" type="text" class="form-control" placeholder="Description">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Content</label>

                                        <div class="col-sm-11">
                                            <input v-model="content" type="text" class="form-control" placeholder="Content">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Status</label>

                                        <div class="col-sm-11">
                                            <select class="form-control" :value="status">
                                                <option :value="true">True</option>
                                                <option :value="false">False</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <!-- /.box-body -->
                                <div class="box-footer">
                                    <button type="submit" class="btn btn-default">Cancel</button>
                                    <button type="submit" class="btn btn-info pull-right" @click="onClick(name)">OK</button>
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
  export default {
    data() {
      return {
        name: '',
        slug: '',
        image: '' ,
        description: '',
        content: '',
        status: false,
      };
    },
    methods: {
      onchange: function () {
        console.log('test value', this.image);
      },
      onClick(name) {
        console.log('test name', name);
      },
    }
  }
</script>

<style scoped>

</style>
