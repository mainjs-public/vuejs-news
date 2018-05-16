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
                <th>Viewed</th>
                <th>State</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody v-if="pages.length > 0">
            <tr v-for="page of pages" v-bind:key="page.id">
                <td><img class="img-circle img-sm" :src="`${apiUrl}${page.image}`"/></td>
                <td>{{page.name}}</td>
                <td>{{page.slug}}</td>
                <td>{{page.created}}</td>
                <td>{{page.updated}}</td>
                <td>{{page.viewed}}</td>
                <td>
                    <span :class="{label: true, 'bg-light-blue': page.state === 'Approval', 'label-success': page.state === 'Published','label-danger': page.state === 'Waiting for Approval', 'label-warning': page.state ==='Draft'}">{{page.state}}</span>
                </td>
                <td>
                    <span v-if="page.status" class="label label-success">Enable</span>
                    <span v-else class="label label-danger">Disable</span></td>
                <td>
                    <nuxt-link :to="`/catalog/page/edit?id=${page.id}`" class="btn btn-primary btn-xs" style="margin-right: 10px">Edit</nuxt-link>
                    <button class="btn btn-danger btn-xs" @click="getDataDelete(page.id, page.name)" data-toggle="modal" data-target="#modal-default">
                        Delete
                    </button>
                </td>
            </tr>
            </tbody>
            <tbody v-else>
            <tr>
                <td colspan="8" style="text-align: center">Empty pages</td>
            </tr>
            </tbody>
        </table>
        <modal :title="`Are you sure to delete page: ${name}?`" buttonOk="OK" :okClick="okClick"/>
    </div>
</template>

<script>
  import { API_URL } from 'shared/api';
  import Modal from './Modal.vue';
  export default {
    props: ['pages', 'deleteClick'],
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
