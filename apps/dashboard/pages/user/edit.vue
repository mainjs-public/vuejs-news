<template>
    <div v-if="!loading">
        <form-category :data="data" :onClick="onclick" v-if="!error_data.message"/>
        <div v-else>
            <span>
                Error get data of category
            </span>
        </div>
    </div>
    <div v-else>
        ...loading
    </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import { getCategory } from '~/apollo/queries/category';
  import FormCategory from '~/components/FormCategory.vue';
  import omit from 'lodash/omit';
  export default {
    data() {
      return {
        data: {},
        loading: true,
        error_data: {}
      }
    },
    async mounted() {
      // try {
      //   if(this.$router.app._route.query.id) {
      //     const categoryId = this.$router.app._route.query.id;
      //     const client = this.$apollo.getClient();
      //     const data =  await client.query({ query: getCategory , variables: {categoryId: categoryId}});
      //     const category = data.data.category;
      //     this.data = omit(category, ['__typename']);
      //   } else {
      //     this.data = {...initData};
      //   }
      //   this.loading = false;
      // } catch (error) {
      //   this.loading = false;
      //   this.error_data = error;
      // }
    },
    methods: {
      ...mapActions({
        editCategory: 'category/editCategory'
      }),
      onclick(e) {
        this.editCategory(this.data);
        e.preventDefault();
      },
    },
    components: {
      FormCategory
    },
    middleware: 'authenticated'
  }
</script>
