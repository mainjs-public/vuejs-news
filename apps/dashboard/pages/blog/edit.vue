<template>
    <div>
        <!--<span>{{data}}</span>-->
        <form-blog :data="data" :onClick="onclick" :loading="loading" :error="error" v-if="getData"/>
        <div v-else>
            <span>
                Error get data of blog
            </span>
        </div>
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
    asyncData({ route }, callback) {
      callback(null, { blogId: route.query.id ? route.query.id: ''})
    },
    data() {
      return {
        data: initData,
        getData: true,
      }
    },
    async mounted() {
      if (this.blogId !== '') {
        // let client = context.app.apolloProvider.defaultClient;
        const client = this.$apollo.getClient();
        await client.query({ query: getBlog , variables: {blogId: this.blogId}})
          .then((res) => {
            return res.data;
          })
          .then(data => {
            const blog = omit(data.blog, ['category', '__typename'])
            this.data = {...blog, category_id: data.blog.category.id, tags: ''};
          })
          .catch(error => {
            this.getData = false
          });
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
    computed: {
        loading () { return this.$store.state.blog.loading },
        error () { return this.$store.state.blog.error }
    },
    components: {
      FormBlog
    }
  }
</script>
