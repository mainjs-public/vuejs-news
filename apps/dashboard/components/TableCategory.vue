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
            <tr v-if="categories.length < 1">
                <td colspan="7">Category empty</td>
            </tr>
            <tr v-else v-for="category of categories" v-bind:key="category.id">
                <td><img class="img-circle img-sm" :src="`${apiUrl}${category.image}`"/></td>
                <td>{{category.name}}</td>
                <td>{{category.slug}}</td>
                <td>{{category.created}}</td>
                <td>{{category.updated}}</td>
                <td>
                    <span v-if="category.status" class="label label-success">Enable</span>
                    <span v-else class="label label-danger">Disable</span>
                </td>
                <td>
                    <nuxt-link :to="`/catalog/category/edit?id=${category.id}`" class="btn btn-primary btn-xs" style="margin-right: 10px">Edit</nuxt-link>
                    <button class="btn btn-danger btn-xs" @click="deleteClick($event, category.id)">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  import { API_URL } from 'shared/api';
  export default {
    props: ['categories', 'deleteClick'],
    data() {
      return {
        apiUrl: API_URL
      }
    }
  }
</script>
