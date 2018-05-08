<template>
    <div>
        <form-user :data="data" :onClick="onclick" v-if="!error_data.message"/>
        <div v-else>
            <span>
                Error get data of user
            </span>
        </div>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import FormUser from '~/components/FormUser.vue';
  import omit from 'lodash/omit';
  export default {
    data() {
      return {
        data: {
          role: "Admin"
        },
        loading: true,
        error_data: {}
      }
    },
    async mounted() {
      try {
        if(this.$router.app._route.query.id) {
          const userId = this.$router.app._route.query.id;
          // const client = this.$apollo.getClient();
          // const data =  await client.query({ query: getCategory , variables: {categoryId: categoryId}});
          // const category = data.data.category;
          this.data = {
            ...this.data,
            id: userId
          };
        }
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error_data = error;
      }
    },
    methods: {
      ...mapActions({
        editUser: 'user/editUser',
      }),
      onclick(e) {
        this.editUser(this.data);
        e.preventDefault();
      },
    },
    components: {
      FormUser
    },
    middleware: 'authenticated'
  }
</script>
