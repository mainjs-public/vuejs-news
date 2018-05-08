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
            <tr v-else v-for="user of users" v-bind:key="users.id">
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.role}}</td>
                <td>
                    <nuxt-link :to="`/user/edit?id=${user.id}`" class="btn btn-primary btn-xs" style="margin-right: 10px">Edit</nuxt-link>
                    <button class="btn btn-danger btn-xs" @click="deleteClick($event, user.id)">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
  import { API_URL } from 'shared/api';
  export default {
    props: ['users', 'deleteClick'],
    data() {
      return {
        apiUrl: API_URL
      }
    }
  }
</script>
