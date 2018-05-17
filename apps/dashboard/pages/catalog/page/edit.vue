<template>
    <div v-if="!loading">
        <form-page :data="data" :onClick="onclick" v-if="!error_data.message"/>
        <div v-else>
            <span>
                Error get data of page
            </span>
        </div>
    </div>
    <div v-else>
        ...loading
    </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import { getPage } from '~/apollo/queries/page';
  import FormPage from '~/components/FormPage.vue';
  import omit from 'lodash/omit';
  const initData = {
    name: '',
    slug: '',
    image: '',
    description: '',
    content: '',
    state: '',
    status: true,
  };
  export default {
    data() {
      return {
        data: {},
        loading: true,
        error_data: {}
      }
    },
    async mounted() {
      try {
        if(this.$router.app._route.query.id) {
          const pageId = this.$router.app._route.query.id;
          const client = this.$apollo.getClient();
          const data =  await client.query({ query: getPage , variables: {pageId: pageId}});
          const page = data.data.page;
          const pageInfo = omit(page, ['__typename']);
          this.data = {
            ...pageInfo,
          };
        } else {
          this.data = {...initData};
        }
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error_data = error;
      }
    },
    computed: {
      state () {
        const auth = this.$store.state.auth;
        return auth !== null && auth.user && auth.user.role && (auth.user.role === 'Admin' || auth.user.role === 'Editer') ? "Approval" : "Waiting for Approval";
      },
    },
    methods: {
      ...mapActions({
        editPage: 'page/editPage'
      }),
      onclick(e) {
        this.editPage(this.data);
        e.preventDefault();
      },
    },
    components: {
      FormPage
    },
    middleware: 'authenticated'
  }
</script>
