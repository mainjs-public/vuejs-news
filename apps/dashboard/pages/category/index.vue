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
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Slug</th>
                                    <th>Created</th>
                                    <th>Updated</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="category of categories" v-bind:key="category.id">
                                    <td><img :src="category.image"/></td>
                                    <td>{{category.name}}</td>
                                    <td>{{category.slug}}</td>
                                    <td>{{category.created}}</td>
                                    <td>{{category.updated}}</td>
                                    <td>{{category.status}}</td>
                                    <td>
                                        <a :href="`/category/edit?id=${category.id}`" class="btn btn-primary" style="margin-right: 10px">Edit</a>
                                        <button class="btn btn-danger" @click="deleteCategory(category.id)">Delete</button>
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
  import { query, deleteCategory } from '~/apollo/queries/category.js';
  import remove from 'lodash/remove';
  export default {
    methods: {
      deleteCategory(id) {
        this.$apollo.mutate({ mutation: deleteCategory, variables: { input: {categoryId: id } }});
        this.categories = remove(this.categories, o => { return o.id !== id});
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

<style scoped>

</style>
