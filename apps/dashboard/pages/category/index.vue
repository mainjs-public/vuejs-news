<template>
    <div>
        <section class="content-header">
            <h1>
                Categories
                <!--<small>advanced tables</small>-->
            </h1>
            <ol class="breadcrumb">
                <li><nuxt-link to="/"><i class="fa fa-dashboard"></i> Home</nuxt-link></li>
                <li class="active">Categories</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
                                <h3 class="box-title">Category List</h3>
                                <nuxt-link to="/category/edit" class="btn btn-primary">
                                    <div style="display: flex; flex-direction: row; align-items: center;">
                                        <span>New Category</span>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                        <!-- /.box-header -->
                        <div v-if="$apollo.loading">Loading...</div>
                        <div v-else class="box-body">
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
                                    <td><img class="img-circle img-sm" :src="category.image"/></td>
                                    <td>{{category.name}}</td>
                                    <td>{{category.slug}}</td>
                                    <td>{{category.created}}</td>
                                    <td>{{category.updated}}</td>
                                    <td>{{category.status}}</td>
                                    <td>
                                        <nuxt-link :to="`/category/edit?id=${category.id}`" class="btn btn-primary btn-xs" style="margin-right: 10px">Edit</nuxt-link>
                                        <button class="btn btn-danger btn-xs" @click="deleteClick($event, category.id)">Delete</button>
                                    </td>
                                </tr>
                                </tbody>
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
  import { mapActions } from 'vuex';
  import { query } from '~/apollo/queries/category.js';
  export default {
    data () {
      return {
        categories: [],
      }
    },
    apollo: {
      categories: {
        query: query,
      }
    },
    methods: {
      ...mapActions({
        deleteCategory: 'category/deleteCategory'
      }),
      deleteClick(e, id) {
        this.deleteCategory(id);
        e.preventDefault();
      },
    },
  }
</script>

<style scoped>

</style>
