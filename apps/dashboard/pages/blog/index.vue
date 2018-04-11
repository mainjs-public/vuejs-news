<template>
    <div>
        <section class="content-header">
            <h1>
                Blogs
                <!--<small>advanced tables</small>-->
            </h1>
            <ol class="breadcrumb">
                <li><a href="/"><i class="fa fa-dashboard"></i> Home</a></li>
                <li class="active">Blogs</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
                                <h3 class="box-title">Data Table Of Blogs</h3>
                                <a href="/blog/edit" class="btn btn-warning dropdown-toggle">
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
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Slug</th>
                                    <th>Created</th>
                                    <th>Updated</th>
                                    <th>Status</th>
                                    <th>Viewed</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="blog of blogs" v-bind:key="blog.id">
                                    <td><img :src="category.image"/></td>
                                    <td>{{blog.name}}</td>
                                    <td>{{blog.slug}}</td>
                                    <td>{{blog.created}}</td>
                                    <td>{{blog.updated}}</td>
                                    <td>{{blog.status}}</td>
                                    <td>{{blog.viewed}}</td>
                                    <td>
                                        <a :href="`#`" class="btn btn-primary" style="margin-right: 10px">Edit</a>
                                        <button class="btn btn-danger" @click="deleteBlog(blog.id)">Delete</button>
                                    </td>
                                </tr>

                                </tbody>
                                <tfoot>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Slug</th>
                                    <th>Created</th>
                                    <th>Updated</th>
                                    <th>Status</th>
                                    <th>Viewed</th>
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
  import { query } from '~/apollo/queries/blog.js';
  export default {
    asyncData (context, callback) {
      const client = context.app.apolloProvider.defaultClient;
      client.query({ query: query })
        .then((res) => res.data)
    .then(data => {
        callback(null, { blogs: data.blogs});
    });
    },
    method: {
      deleteBlog(id) {
        console.log('id')
      },
    }
  }
</script>

<style scoped>

</style>
