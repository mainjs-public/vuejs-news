<template>
    <div>
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
            <tr v-if="dataPagination.length < 1">
                <td colspan="7">Category empty</td>
            </tr>
            <tr v-else v-for="category of dataPagination" v-bind:key="category.id">
                <td><img class="img-circle img-sm" :src="`${apiUrl}${category.image}`"/></td>
                <td>{{category.name}}</td>
                <td>{{category.slug}}</td>
                <td>{{category.created}}</td>
                <td>{{category.updated}}</td>
                <td>{{category.status}}</td>
                <td>
                    <nuxt-link :to="`/catalog/category/edit?id=${category.id}`" class="btn btn-primary btn-xs" style="margin-right: 10px">Edit</nuxt-link>
                    <button class="btn btn-danger btn-xs" @click="deleteClick($event, category.id)">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
        <pagination v-if="isPagination" :count="countPagination" onChange="onChange" :total="categories.length"/>
    </div>
</template>

<script>
  import { API_URL } from '~/config/api';
  import Pagination from './Pagination.vue';
  export default {
    props: ['categories', 'deleteClick', 'pagination'],
    data() {
      return {
        apiUrl: API_URL,
        countPagination: 10,
      }
    },
    computed: {
      isPagination: function () {
        return !this.pagination || typeof this.pagination !== 'boolean' || (this.categories && this.categories.length < 1) ? false : this.pagination;
      },
      dataPagination: function () {
        return !this.pagination || typeof this.pagination !== 'boolean'? this.categories : this.categories.filter((o, index) => {return index < this.countPagination});
      }
    },
    methods: {
      onChange() {

      }
    },
    components: {
      Pagination
    }
  }
</script>

<style scoped>

</style>
