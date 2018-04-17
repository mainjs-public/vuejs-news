<template>
    <div>
        <section class="content-header">
            <h1>
                Blogs
            </h1>
            <ol class="breadcrumb">
                <li><nuxt-link to="/"><i class="fa fa-dashboard"></i> Home</nuxt-link></li>
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
                                <nuxt-link to="/blog/edit" class="btn btn-primary">
                                    <div style="display: flex; flex-direction: row; align-items: center;">
                                        <span>New blogs</span>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                        <!-- /.box-header -->
                        <div v-if="$apollo.loading"> ...loading</div>
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
    data () {
      return {
        blogs: [],
      }
    },
    apollo: {
      blogs: {
        query: query,
        fetchPolicy: 'cache-and-network',
      }
    },
    methods: {
      ...mapActions({
        deleteBlog: 'blog/deleteBlog'
      }),
      deleteClick(e, id) {
        this.deleteBlog(id);
        e.preventDefault();
      },
    },
    components: {
      TableBlog
    },
    middleware: 'auth'
  }
</script>

<style scoped>

</style>
