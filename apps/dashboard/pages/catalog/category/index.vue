<template>
    <div>
        <section class="content-header">
            <h1>
                Categories
            </h1>
            <ol class="breadcrumb">
                <li><nuxt-link to="/"><i class="fa fa-dashboard"></i> Home</nuxt-link></li>
                <li><nuxt-link to="/catalog/category">Catalog</nuxt-link></li>
                <li class="active">Category</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
                                <h3 class="box-title">Category List</h3>
                                <nuxt-link to="/catalog/category/edit" class="btn btn-primary">
                                    <div style="display: flex; flex-direction: row; align-items: center;">
                                        <span>New Category</span>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                        <!-- /.box-header -->
                        <div v-if="$apollo.loading && !categories.length">Loading...</div>
                        <div v-else class="box-body">
                            <table-category :categories="categories" :deleteClick="deleteClick"/>
                        </div>
                        <!-- /.box-body -->
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import { query } from '~/apollo/queries/category.js';
  import TableCategory from '~/components/TableCategory.vue';
  export default {
    data() {
      return {
        categories: []
      }
    },
    apollo: {
      categories: {
        query: query,
        fetchPolicy: 'cache-and-network',
      }
    },
    methods: {
      ...mapActions({
        deleteCategory: 'category/deleteCategory',
      }),
      deleteClick(e, id) {
        this.deleteCategory(id);
        e.preventDefault();
      },
    },
    components: {
      TableCategory
    },
    middleware: 'auth'
  }
</script>

<style scoped>

</style>
