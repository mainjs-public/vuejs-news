<template>
    <div>
        {{data}}
        <form-blog :data="data" :onClick="onClick"/>
    </div>
</template>

<script>
  import FormBlog from '~/components/FormBlog.vue';
  const initData = {
    name: '',
    slug: '',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdYe3FTd_dtcmwRwTZ03rhLACVSDYYTxpRLvm7yP3Rhry0IvD',
    description: '',
    content: '',
    tags: ['Tech', 'Login', 'Value'],
    status: true,
  };
  export default {
    data() {
      return {
        data: initData,
      }
    },
    components:{
      FormBlog
    },
    methods: {
      onClick(e) {
        console.log('success click blog');
        e.preventDefault();
      }
    }
  }
</script>
