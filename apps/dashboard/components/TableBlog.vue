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
                <th>State</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody v-if="blogs.length > 0">
            <tr v-for="blog of blogs" v-bind:key="blog.id">
                <td><img class="img-circle img-sm" :src="`${apiUrl}${blog.image}`"/></td>
                <td>{{blog.name}}</td>
                <td>{{blog.slug}}</td>
                <td>{{blog.created}}</td>
                <td>{{blog.updated}}</td>
                <td>
                    <span :class="{label: true, 'bg-light-blue': blog.state === 'Approval', 'label-success': blog.state === 'Published','label-danger': blog.state === 'Waiting for Approval', 'label-warning': blog.state ==='Draft'}">{{blog.state}}</span>
                </td>
                <td>
                    <span v-if="blog.status" class="label label-success">Enable</span>
                    <span v-else class="label label-danger">Disable</span></td>
                <td>
                    <nuxt-link :to="`/catalog/blog/edit?id=${blog.id}`" class="btn btn-primary btn-xs" style="margin-right: 10px">Edit</nuxt-link>
                    <button class="btn btn-danger btn-xs" @click="getDataDelete(blog.id, blog.name)" data-toggle="modal" data-target="#modal-default">
                        Delete
                    </button>
                </td>
            </tr>
            </tbody>
            <tbody v-else>
            <tr>
                <td colspan="8" style="text-align: center">Empty blogs</td>
            </tr>
            </tbody>
        </table>
        <modal :title="`Are you sure to delete blog: ${name}?`" buttonOk="OK" :okClick="okClick"/>
    </div>
</template>

<script>
  import { API_URL } from 'shared/api';
  import Modal from './Modal.vue';
  export default {
    props: ['blogs', 'deleteClick'],
    data() {
      return {
        id: '',
        name: '',
        apiUrl: API_URL,
      }
    },
    methods: {
      getDataDelete(id, name) {
        this.id = id;
        this.name = name;
      },
      okClick() {
        this.deleteClick(this.id);
      }
    },
    components: {
      Modal
    }
  }
</script>
