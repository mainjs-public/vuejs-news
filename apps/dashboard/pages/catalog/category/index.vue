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
                        <div class="alert alert-danger alert-dismissible" style="margin: 0px 10px" v-if="error.message">
                            <h4><i class="icon fa fa-ban"></i> Alert!</h4>
                            {{error.message}}
                        </div>
                        <div v-if="loading">
                            <i class="fa fa-circle-o-notch fa-spin"/>loading...
                        </div>
                        <div v-else class="box-body">
                            <table-category :categories="categories" :deleteClick="deleteClick" :pagination="true"/>
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
    computed: {
      categories () { return this.$store.state.category.list },
      loading () { return this.$store.state.category.loading },
      error () { return this.$store.state.category.error }
    },
    methods: {
      ...mapActions({
        deleteCategory: 'category/deleteCategory',
        fetch: 'category/fetch',
      }),
      deleteClick(e, id) {
        this.deleteCategory(id);
        e.preventDefault();
      },
    },
    created() {
      if (this.categories.length < 1) {
        this.fetch();
      }
    },
    components: {
      TableCategory
    },
    middleware: 'auth'
  }
</script>

<style scoped>

</style>
