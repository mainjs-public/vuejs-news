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
</template>

<script>
  export default {
    props: ['blogs', 'deleteClick']
  }
</script>

<style scoped>

</style>
