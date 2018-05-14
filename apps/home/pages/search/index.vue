<template>
    <div v-if="error !== ''">
        {{error}}
    </div>
    <div v-else>
        <div class="inner-page-header">
            <div class="banner">
                <img src="/images/banner/3.jpg" alt="Banner" style="width: 100%; max-height: 401px">
            </div>
            <div class="banner-text">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="header-page-locator">
                                <ul>
                                    <li>
                                        <nuxt-link to="/">Home <i class="fa fa-compress" aria-hidden="true"></i></nuxt-link> Search
                                    </li>
                                </ul>
                            </div>
                            <div class="header-page-title">
                                <h1>Search</h1>
                            </div>
                            <div class="header-page-subtitle">
                                <p>{{valueSearch}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Inner Page Header serction end here -->

        <!-- Category Page Start Here -->
        <div class="blog-page-area gallery-page category-page">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12" v-if="$apollo.loading">loading...</div>
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12" v-else-if="!$apollo.loading && search.data.length > 0">Search empty</div>
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12" v-else>
                        <div class="row">
                            <ul>
                                <li>
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div id="news-Carousel1" class="carousel carousel-top-category slide" data-ride="carousel">
                                            <!-- Wrapper for slides -->
                                            <!-- Left and right controls -->
                                            <div class="next-prev">
                                                <a class="left news-control" href="#news-Carousel1" data-slide="prev">
                                                    <span class="news-arrow-left"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
                                                </a>
                                                <a class="right news-control" href="#news-Carousel1" data-slide="next">
                                                    <span class="news-arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                                                </a>
                                            </div>
                                            <div class="carousel-inner">
                                                <div v-for="(blog, index) in search.data" :class="{item: true, active: index === 0}">
                                                    <div class="blog-image">
                                                        <nuxt-link :to="`/blog/${blog.slug}`">
                                                            <i class="fa fa-link" aria-hidden="true"></i>
                                                            <img :src="`${apiUrl}${blog.image}`" :alt="blog.name" style=", width: 100%, max-height: 470px">
                                                        </nuxt-link>
                                                    </div>
                                                    <div class="dsc">
                                                        <h3>
                                                            <nuxt-link to="/">{{blog.name}}</nuxt-link>
                                                        </h3>
                                                        <span class="date"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i> {{blog.created}}</span>
                                                        <span class="like"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i>  {{blog.comments.length}} </a></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="row">
                            <ul>
                                <li v-for="blog of search.data" v-bind:key="blog.id">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="carousel-inner">
                                            <div class="blog-image">
                                                <nuxt-link :to="`/blog/${blog.slug}`">
                                                    <i class="fa fa-link" aria-hidden="true"></i>
                                                    <img :src="`${apiUrl}${blog.image}`" :alt="blog.name" style="height: 270px">
                                                </nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <h3>
                                            <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link>
                                        </h3>
                                        <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> {{blog.created}}</span>
                                        <span class="like"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i>  {{blog.comments.length}} </a></span>
                                        <p>{{blog.description}}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <pagination :length="length" :hasNextPage="search.hasNextPage" :count="search.count" :start="start" :changeStartPagination="changeStartPagination"/>
                    </div>
                    <content-right/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import { searchPaginationQuery } from '~/apollo/queries/search'
  import { API_URL } from 'shared/api'
  import Pagination from '~/components/Pagination.vue'
  import ContentRight from '~/components/ContentRight.vue'

  export default {
    asyncData ({route}, callback) {
      if (route.query.word && route.query.word !== '') {
        const word = route.query.word
        callback(null, {valueSearch: word, error: ''})
      } else {
        callback(null, {valueSearch: '', error: 'Not word to seach'})
      }
    },
    data () {
      return {
        start: 0,
        length: 10,
        search: {
          data: [],
          count: 0,
          hasNextPage: false,
        },
        apiUrl: API_URL
      }
    },
    apollo: {
      search: {
        query: searchPaginationQuery,
        variables () {
          return {
            query: this.$route.query.word ? this.$route.query.word : '',
            start: this.start * this.length,
            length: this.length
          }
        },
        fetchPolicy: 'cache-and-network',
      }
    },
    methods: {
      changeLengthPanination (value) {
        this.length = value
      },
      changeStartPagination (value) {
        this.start = value
      }
    },
    components: {
      Pagination,
      ContentRight
    }
  }
</script>
