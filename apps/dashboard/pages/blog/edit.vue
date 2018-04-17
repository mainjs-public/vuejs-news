<template>
    <div v-if="!loading">
        <form-blog :data="data" :onClick="onclick" v-if="!error_data.message"/>
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdYe3FTd_dtcmwRwTZ03rhLACVSDYYTxpRLvm7yP3Rhry0IvD',
    description: '',
    content: '',
    tags: "",
    status: true,
    category_id: ''
  };
  export default {
    data() {
      return {
        data: initData,
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
          const new_blog = { ...blog, category_id: blog.category.id || '', tags: ''};
          this.data = omit(new_blog, ['category', '__typename']);
        }
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error_data = error;
      }
    },
    methods: {
      ...mapActions({
        editBlog: 'blog/editBlog'
      }),
      onclick(e) {
        this.editBlog(this.data);
        e.preventDefault();
      },
    },
    components: {
      FormBlog
    },
    middleware: 'auth'
  }
</script>
