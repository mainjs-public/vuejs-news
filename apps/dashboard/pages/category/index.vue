<template>
    <div>
        <section class="content-header">
            <h1>
                Categories
                <!--<small>advanced tables</small>-->
            </h1>
            <ol class="breadcrumb">
                <li><a href="/"><i class="fa fa-dashboard"></i> Home</a></li>
                <li class="active">Categories</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
                                <h3 class="box-title">Data Table Of Categories</h3>
                                <a href="/category/edit" class="btn btn-warning dropdown-toggle">
                                    <div style="display: flex; flex-direction: row; align-items: center;">
                                        <i class="fa ion-android-add-circle" style="font-size: 20px; margin-right: 15px"/>
                                        <span style="font-size: 20px; font-weight: bold">Add</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body">
                            <table id="example1" class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>Number</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Content</th>
                                    <th>Description</th>
                                    <th>Created</th>
                                    <th>Updated</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(category, index) in categories" v-bind:key="category.id">
                                    <td>{{index+1}}</td>
                                    <td><img :src="category.image"/></td>
                                    <td>{{category.name}}</td>
                                    <td>{{category.content}}</td>
                                    <td>{{category.description}}</td>
                                    <td>{{category.created}}</td>
                                    <td>{{category.updated}}</td>
                                    <td>{{category.status}}</td>
                                    <td>
                                        <a :href="`/category/edit/${category.id}`" class="btn btn-primary" style="margin-right: 10px">Edit</a>
                                        <button class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>

                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>Number</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Content</th>
                                    <th>Description</th>
                                    <th>Created</th>
                                    <th>Updated</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                        <!-- /.box-body -->
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import { query } from '~/query/category.js';
  export default {
    asyncData (context, callback) {
      const client = context.app.apolloProvider.defaultClient;
      client.query({ query: query })
        .then((res) => res.data)
    .then(data => {
        callback(null, { categories: data.categories});
    });
    },
  }
</script>

<style scoped>

</style>
