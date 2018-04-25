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
                        <div v-if="$apollo.loading && !categoryPagination.data.length">Loading...</div>
                        <div v-else class="box-body">
                            <table-category :categories="categoryPagination.data" :deleteClick="deleteClick"/>
                        </div>
                        <!-- /.box-body -->

                        <select v-model.number="length">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>

                        <ul v-if="categoryPagination.count" class="pagination">
                            <li class="paginate_button previous disabled">
                                <a @click.prevent="start--">Previous</a>
                            </li>
                            <li v-for="p in pagination" :class="{paginate_button: true, active: start === p}">
                                <a @click.prevent="start = p">{{ p + 1 }}</a>
                            </li>
                            <li class="paginate_button next" id="example1_next">
                                <a @click.prevent="start++">Next</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import { query, queryPagination } from '~/apollo/queries/category.js';
  import TableCategory from '~/components/TableCategory.vue';
  export default {
    data() {
      return {
        start: 0,
        length: 2,
        categoryPagination: {
          data: [],
          count: 0,
        }
      }
    },
    computed: {
      pagination: function() {
        let p = [];
        for (let i = 0; i < this.categoryPagination.count / this.length; i++) {
          p.push(i);
        }
        return p;
      }
    },
    apollo: {
      categoryPagination: {
        query: queryPagination,
        variables() {
          return {
            start: this.start * this.length,
            length: this.length
          }
        },
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
