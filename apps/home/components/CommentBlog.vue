<template>
    <div>
        <div class="author-comment">
            <h3 class="title-bg">Recent Comments</h3>
            <div v-if="$apollo.loading">loading...</div>
            <div v-else>
                <ul v-if="commentPaginationByIdBlog.data.length>0">
                    <li v-for="comment of commentPaginationByIdBlog.data" v-bind:key="comment.id">
                        <div class="row">
                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                <div class="image-comments"><img src="/images/single/3.jpg"
                                                                 alt="Blog single photo"></div>
                            </div>
                            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
                                                <span class="reply"> <span class="date"><i
                                                        class="fa fa-calendar-check-o" aria-hidden="true"></i> {{comment.created}}</span></span>
                                <div class="dsc-comments">
                                    <h4>{{comment.name}}</h4>
                                    <p>{{comment.comment}}</p>
                                    <a href="#"> Reply</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div v-else>
                    Empty comments
                </div>
            </div>
        </div>
        <pagination
                :length="length"
                :count="commentPaginationByIdBlog.count"
                :start="start"
                :hasNextPage="commentPaginationByIdBlog.hasNextPage"
                :changeStartPagination="changeStartPagination"
        />
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Pagination from './Pagination.vue'
  import { queryPaginationByIdBlog } from '~/apollo/queries/comment'
  import { API_URL } from '~/config/api'

  export default {
    props: ['blogId'],
    data () {
      return {
        apiUrl: API_URL,
        start: 0,
        length: 10,
        commentPaginationByIdBlog: {
          data: [],
          count: 0,
          hasNextPage: false
        }
      }
    },
    apollo: {
      commentPaginationByIdBlog: {
        query: queryPaginationByIdBlog,
        variables() {
          return {
            blog_id: this.blogId,
            start: this.start * this.length,
            length: this.length
          }
        },
        fetchPolicy: 'cache-and-network',
      }
    },
    methods: {
      changeStartPagination(value) {
        this.start = value
      }
    }
    ,
    components: {
      Pagination,
    }
  }
</script>
