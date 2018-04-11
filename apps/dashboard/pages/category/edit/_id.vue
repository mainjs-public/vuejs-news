<template>
    <div>
       <!--<form-category status="edit" />-->
        edit
        {{categoryId}}
        {{data}}
    </div>
</template>

<script>
    import { getCategory } from '~/query/category.js'
    import FormCategory from '~/components/FormCategory.vue';
    export default {
      asyncData({params}, callback) {
        callback(null, { categoryId: params.id });
      },
      components: {
        FormCategory,
      },
      data() {
        return {
          data: {}
        }
      },
      created() {
        const client = this.$apollo.getClient();
        console.log('test id', this.categoryId);
        client.query({ query: getCategory, variables: { categoryId: '5acafee3cfd429988a6df17c' }})
          .then((res) => res.data)
          .then(data => {
            console.log('test data', data);
            this.data = data
          });
      }
    }
</script>
