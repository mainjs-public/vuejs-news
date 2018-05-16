<template>
    <div>
        <table id="example1" class="table table-bordered table-striped">
            <thead>
            <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="users.length < 1">
                <td colspan="7">User empty</td>
            </tr>
            <tr v-else v-for="user of users" v-bind:key="user.id">
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.role}}</td>
                <td>
                    <nuxt-link :to="`/user/edit?id=${user.id}`" class="btn btn-primary btn-xs" style="margin-right: 10px">Edit</nuxt-link>
                    <button class="btn btn-danger btn-xs" @click="getDataDelete(user.id, user.name)" data-toggle="modal" data-target="#modal-default">
                        Delete
                    </button>
                </td>
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
    props: ['users', 'deleteClick'],
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
