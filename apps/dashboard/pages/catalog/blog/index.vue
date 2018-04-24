<template>
    <div>
        <section class="content-header">
            <h1>
                Blogs
            </h1>
            <ol class="breadcrumb">
                <li><nuxt-link to="/"><i class="fa fa-dashboard"></i> Home</nuxt-link></li>
                <li><nuxt-link to="/catalog/category">Catalog</nuxt-link></li>
                <li class="active">Blogs</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
                                <h3 class="box-title">Blogs List</h3>
                                <nuxt-link to="/catalog/blog/edit" class="btn btn-primary">
                                    <div style="display: flex; flex-direction: row; align-items: center;">
                                        <span>New blogs</span>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="alert alert-danger alert-dismissible" style="margin: 0px 10px" v-if="error.message">
                            <h4><i class="icon fa fa-ban"></i> Alert!</h4>
                            {{error.message}}
                        </div>
                        <!-- /.box-header -->
                        <div v-if="loading"> <i class="fa fa-circle-o-notch fa-spin"/>loading...</div>
                        <div class="box-body" v-else>
                            <table-blog :blogs="blogs" :deleteClick="deleteClick"/>
                        </div>
                        <!-- /.box-body -->
                    </div>
                    <!-- /.box -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import { query } from '~/apollo/queries/blog.js';
  import TableBlog from '~/components/TableBlog.vue';
  export default {
    computed: {
      blogs () { return this.$store.state.blog.list },
      loading () { return this.$store.state.blog.loading },
      error () { return this.$store.state.blog.error }
    },
    methods: {
      ...mapActions({
        deleteBlog: 'blog/deleteBlog',
        fetch: 'blog/fetch',
      }),
      deleteClick(e, id) {
        this.deleteBlog(id);
        e.preventDefault();
      },
    },
    created() {
      if (this.blogs.length < 1) {
        this.fetch();
      }
    },
    components: {
      TableBlog
    },
    middleware: 'auth'
  }
</script>

<style scoped>

</style>
