<template>
    <div>
        {{data}}
        <form-blog :data="data" :onClick="editblog"/>
    </div>
</template>

<script>
  import find from 'lodash/find';
  import join from 'lodash/join';
  import FormBlog from '~/components/FormBlog.vue';
  import { mapActions } from 'vuex';
  const initData = {
    name: '',
    slug: '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdYe3FTd_dtcmwRwTZ03rhLACVSDYYTxpRLvm7yP3Rhry0IvD',
    description: '',
    content: '',
    tags: [],
    string_tags: '',
    status: true,
    category: ''
  };
  export default {
    asyncData(context, callback) {
      if (context.route.query.id) {
        callback(null, {idBlog: context.route.query.id});
      } else {
        callback(null, {idBlog: ''});
      }
    },
    computed: {
      blogs: function () {
        return this.$store.state.blogs
      }
    },
    data() {
      return {
        data: initData,
      }
    },
    mounted() {
      const existBlog = find(this.blogs, o => { return o.id === this.idBlog });
      if (existBlog) {
        this.data = {...existBlog, string_tags: join(existBlog.tags, ',')};
      }
    },
    components:{
      FormBlog
    },
    methods: {
      ...mapActions([
        'editblog',
      ]),
      onClick(e) {
        console.log('success click blog');
        e.preventDefault();
      },
    }
  }
</script>
