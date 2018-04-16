<template>
    <div>
        <section class="content-header">
            <h1>
                Blogs
                <!--<small>advanced tables</small>-->
            </h1>
            <ol class="breadcrumb">
                <li><nuxt-link to="/"><i class="fa fa-dashboard"></i> Home</nuxt-link></li>
                <li class="active">Blogs</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <!--<div class="col-xs-12">-->
                    <!--<div class="box">-->
                        <!--<div class="box-header">-->
                            <!--<div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">-->
                                <!--<h3 class="box-title">Blogs List</h3>-->
                                <!--<nuxt-link to="/blog/edit" class="btn btn-primary">-->
                                    <!--<div style="display: flex; flex-direction: row; align-items: center;">-->
                                        <!--<span>New blogs</span>-->
                                    <!--</div>-->
                                <!--</nuxt-link>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--&lt;!&ndash; /.box-header &ndash;&gt;-->
                        <!--<div v-if="$apollo.loading">Loading...</div>-->
                        <!--<div v-else class="box-body">-->
                            <!--<table id="example1" class="table table-bordered table-striped">-->
                                <!--<thead>-->
                                <!--<tr>-->
                                    <!--<th>Image</th>-->
                                    <!--<th>Name</th>-->
                                    <!--<th>Slug</th>-->
                                    <!--<th>Created</th>-->
                                    <!--<th>Updated</th>-->
                                    <!--<th>Status</th>-->
                                    <!--<th>Actions</th>-->
                                <!--</tr>-->
                                <!--</thead>-->
                                <!--<tbody v-if="blogs.length > 0">-->
                                <!--<tr v-for="blog of blogs" v-bind:key="blog.id">-->
                                    <!--<td><img class="img-circle img-sm" :src="blog.image"/></td>-->
                                    <!--<td>{{blog.name}}</td>-->
                                    <!--<td>{{blog.slug}}</td>-->
                                    <!--<td>{{blog.created}}</td>-->
                                    <!--<td>{{blog.updated}}</td>-->
                                    <!--<td>{{blog.status}}</td>-->
                                    <!--<td>-->
                                        <!--<nuxt-link :to="`/blog/edit?id=${blog.id}`" class="btn btn-primary btn-xs" style="margin-right: 10px">Edit</nuxt-link>-->
                                        <!--<button class="btn btn-danger btn-xs" @click="deleteClick($event, blog.id)">-->
                                            <!--Delete-->
                                        <!--</button>-->
                                    <!--</td>-->
                                <!--</tr>-->
                                <!--</tbody>-->
                                <!--<tbody v-else>-->
                                    <!--<tr>-->
                                        <!--<td colspan="7" style="text-align: center">Blog Empty</td>-->
                                    <!--</tr>-->
                                <!--</tbody>-->
                            <!--</table>-->
                        <!--</div>-->
                        <!--&lt;!&ndash; /.box-body &ndash;&gt;-->
                    <!--</div>-->
                <!--</div>-->
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
                                <h3 class="box-title">Blogs List</h3>
                                <nuxt-link to="/blog/edit" class="btn btn-primary">
                                    <div style="display: flex; flex-direction: row; align-items: center;">
                                        <span>New blogs</span>
                                    </div>
                                </nuxt-link>
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
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody v-if="blogs.length > 0">
                                    <tr v-for="blog of blogs" v-bind:key="blog.id">
                                        <td><img class="img-circle img-sm" :src="blog.image"/></td>
                                        <td>{{blog.name}}</td>
                                        <td>{{blog.slug}}</td>
                                        <td>{{blog.created}}</td>
                                        <td>{{blog.updated}}</td>
                                        <td>{{blog.status}}</td>
                                        <td>
                                            <nuxt-link :to="`/blog/edit?id=${blog.id}`" class="btn btn-primary btn-xs" style="margin-right: 10px">Edit</nuxt-link>
                                            <button class="btn btn-danger btn-xs" @click="deleteClick($event, blog.id)">
                                            Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.box-body -->
                    </div>
                    <!-- /.box -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import { query } from '~/apollo/queries/blog.js';
  export default {
    data () {
      return {
        blogs: [],
      }
    },
    apollo: {
      blogs: {
        query: query,
        fetchPolicy: 'cache-and-network',
      }
    },
    methods: {
      ...mapActions({
        deleteBlog: 'blog/deleteBlog'
      }),
      deleteClick(e, id) {
        this.deleteBlog(id);
        e.preventDefault();
      },
    },
  }
</script>

<style scoped>

</style>
