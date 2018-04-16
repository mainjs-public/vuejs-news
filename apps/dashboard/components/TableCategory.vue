<template>
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
</template>

<script>
  export default {
    props: ['categories', 'deleteClick']
  }
</script>

<style scoped>

</style>
