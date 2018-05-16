<template>
    <div>
        <section class="content-header">
            <h1>
                Page
            </h1>
            <ol class="breadcrumb">
                <li><nuxt-link to="/"><i class="fa fa-dashboard"></i> Home</nuxt-link></li>
                <li><nuxt-link to="/catalog/category">Catalog</nuxt-link></li>
                <li class="active">Page</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
                                <h3 class="box-title">Pages List</h3>
                                <nuxt-link to="/catalog/page/edit" class="btn btn-primary">
                                    <div style="display: flex; flex-direction: row; align-items: center;">
                                        <span>New Page</span>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                        <!-- /.box-header -->
                        <div v-if="$apollo.loading && !pagePagination.data.length">Loading...</div>
                        <div v-else class="box-body">
                            <table-page :pages="pagePagination.data" :deleteClick="deleteClick"/>
                            <pagination :length="length" :hasNextPage="pagePagination.hasNextPage" :count="pagePagination.count" :start="start" :changeLengthPanination="changeLengthPanination" :changeStartPagination="changeStartPagination"/>
                        </div>
                        <!--/.box-body -->
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import { queryPagination } from '~/apollo/queries/page';
  import TablePage from '~/components/TablePage.vue';
  import Pagination from '~/components/Pagination.vue';
  export default {
    data() {
      return {
        start: 0,
        length: 10,
        pagePagination: {
          data: [],
          count: 0,
          hasNextPage: false
        }
      }
    },
    apollo: {
      pagePagination: {
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
        deletePage: 'page/deletePage',
      }),
      deleteClick(e, id) {
        this.deletePage({id: id, start: this.start * this.length, length: this.length});
        e.preventDefault();
      },
      changeLengthPanination(value) {
        this.length = value;
      },
      changeStartPagination(value) {
        this.start = value;
      }
    },
    components: {
      TablePage,
      Pagination
    },
    middleware: 'authenticated'
  }
</script>
