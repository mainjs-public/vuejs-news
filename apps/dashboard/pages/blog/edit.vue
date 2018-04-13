<template>
    <div>
        <!--<span>{{data}}</span>-->
        <form-blog :data="data" :onClick="onclick" :loading="loading" :error="error"/>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import omit from 'lodash/omit'
  import FormBlog from '~/components/FormBlog.vue';
  const initData = {
    name: '',
    slug: '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdYe3FTd_dtcmwRwTZ03rhLACVSDYYTxpRLvm7yP3Rhry0IvD',
    description: '',
    content: '',
    tags: [],
    status: true,
    category_id: ''
  };
  export default {
    data() {
      return {
        data: initData,
      }
    },
    methods: {
      ...mapActions({
        addBlog: 'blog/addBlog'
      }),
      onclick(e) {
        this.addBlog(this.data);
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
