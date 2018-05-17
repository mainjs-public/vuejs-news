<template>
    <div>
        <section class="content-header">
            <h1>
                Users
            </h1>
            <ol class="breadcrumb">
                <li>
                    <nuxt-link to="/"><i class="fa fa-dashboard"></i> Home</nuxt-link>
                </li>
                <li class="active">Users</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
                                <h3 class="box-title">Users List</h3>
                                <nuxt-link to="/user/edit" class="btn btn-primary">
                                    <div style="display: flex; flex-direction: row; align-items: center;">
                                        <span>New User</span>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                        <!-- /.box-header -->
                        <div v-if="$apollo.loading && !users.length">Loading...</div>
                        <div class="box-body" v-else>
                            <table-user :users="users" :deleteClick="deleteClick"/>
                        </div>
                        <!-- /.box-body -->
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import TableUser from '~/components/TableUser.vue'
  import { query } from '~/apollo/queries/user'
  export default {
    data () {
      return {
        users: [],
      }
    },
    methods: {
      ...mapActions({
        deleteUser: 'user/deleteUser',
      }),
      deleteClick (id) {
        this.deleteUser(id);
      }
    },
    apollo: {
      users: {
        query: query,
        fetchPolicy: 'cache-and-network',
      }
    },
    components: {
      TableUser
    },
    middleware: 'authenticated'
  }
</script>
