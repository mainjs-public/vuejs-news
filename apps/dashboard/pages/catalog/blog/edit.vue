<template>
    <div v-if="!loading">
        <form-blog :data="data" :onClick="onclick" v-if="!error_data.message" :role="role"/>
        <div v-else>
            <span>
                Error get data of blog
            </span>
        </div>
    </div>
    <div v-else>
        ...loading
    </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import { getBlog } from '~/apollo/queries/blog';
  import FormBlog from '~/components/FormBlog.vue';
  import omit from 'lodash/omit';
  const initData = {
    name: '',
    slug: '',
    image: '',
    description: '',
    content: '',
    tags: [],
    status: true,
    category_id: '',
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
          const blogId = this.$router.app._route.query.id;
          const client = this.$apollo.getClient();
          const data =  await client.query({ query: getBlog , variables: {blogId: blogId}});
          const blog = data.data.blog;
          const blogInfo = omit(blog, ['__typename']);
          this.data = {
            ...blogInfo,
          };
        } else {
          this.data = {...initData, state: this.state};
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
      role () {
        const auth = this.$store.state.auth;
        return auth !== null ? auth.user.role : 'Contributor';
      }
    },
    methods: {
      ...mapActions({
        editBlog: 'blog/editBlog'
      }),
      onclick(e, data) {
        this.editBlog(data);
        e.preventDefault();
      },
    },
    components: {
      FormBlog
    },
    middleware: 'authenticated'
  }
</script>
