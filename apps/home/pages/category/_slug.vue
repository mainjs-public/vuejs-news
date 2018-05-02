<template>
    <div v-if="error.message">
        {{error.message}}
    </div>
    <div v-else>
        <div class="inner-page-header">
            <div class="banner">
                <img :src="`${apiUrl}${category.image}`" :alt="category.name" style="width: 100%; max-height: 401px">
            </div>
            <div class="banner-text">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="header-page-locator">
                                <ul>
                                    <li><nuxt-link to="/">Home <i class="fa fa-compress" aria-hidden="true"></i> </nuxt-link> Category</li>
                                </ul>
                            </div>
                            <div class="header-page-title">
                                <h1>Category {{category.name}}</h1>
                            </div>
                            <div class="header-page-subtitle">
                                <p>{{category.description}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Inner Page Header serction end here -->
        <div class="blog-page-area gallery-page category-page">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div v-if="$apollo.loading">loading...</div>
                        <div class="row" v-else>
                            <ul v-if="blogPagination.data.length > 0">
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
                                                <div class="item" v-for="(blog, index) in blogPagination.data" v-bind:key="blog.id" v-bind:class="index=== 0? 'active': ''" v-if="index<4">
                                                    <div class="blog-image">
                                                        <nuxt-link :to="`/blog/${blog.slug}`">
                                                            <i class="fa fa-link" aria-hidden="true"></i>
                                                            <img :src="`${apiUrl}${blog.image}`" alt="category photo" style="width: 100%; max-height: 470px">
                                                        </nuxt-link>
                                                    </div>
                                                    <div class="dsc">
                                                        <h3><nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link></h3>
                                                        <span class="date"> <i class="fa fa-calendar-check-o" aria-hidden="true"></i> {{blog.created}}</span>
                                                        <span class="like"><nuxt-link to="#"><i class="fa fa-comment-o" aria-hidden="true"></i>  {{blog.comments.length}} </nuxt-link></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="row">
                            <div v-if="$apollo.loading">loading...</div>
                            <ul v-for="blog of blogPagination.data" v-bind:key="blog.id" v-else>
                                <li>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="carousel-inner">
                                            <div class="blog-image">
                                                <nuxt-link :to="`/blog/${blog.slug}`">
                                                    <i class="fa fa-link" aria-hidden="true"></i>
                                                    <img :src="`${apiUrl}${blog.image}`" alt="category photo" style="width: 100%; max-height: 270px">
                                                </nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <h3><nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link></h3>
                                        <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> {{blog.created}}</span> <span class="like"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i>  {{blog.comments.length}} </a></span>
                                        <p>{{blog.description}}</p>
                                    </div>
                                </li>
                            </ul>
                            <div class="row" style="display: inline-block">
                                <pagination :length="length" :hasNextPage="blogPagination.hasNextPage" :count="blogPagination.count" :start="start" :changeStartPagination="changeStartPagination"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div class="sidebar-area">
                            <div class="like-box-area">
                                <ul>
                                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i> <span class="like-page">like our facebook page <br/>210,956 likes</span> <span class="like"><i class="fa fa-plus" aria-hidden="true"></i></span></a></li>
                                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> <span class="like-page">Follow us on twitter<br/>2109 followers</span> <span class="like">
                                <i class="fa fa-plus" aria-hidden="true"></i></span></a></li>
                                    <li><a href="#"><i class="fa fa-rss" aria-hidden="true"></i> <span class="like-page">Subscribe to our rss <br/>210,956 likes</span> <span class="like"><i class="fa fa-plus" aria-hidden="true"></i></span></a></li>
                                </ul>
                            </div>
                            <div class="recent-post-area hot-news">
                                <h3 class="title-bg">Recent Post</h3>
                                <ul class="news-post">
                                    <li v-for="(blog, index) in blogPagination.data" v-bind:key="blog.id" v-if="index<4">
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 content">
                                                <div class="item-post">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 paddimg-right-none">
                                                            <nuxt-link :to="`/blog/${blog.slug}`"><img :src="`${apiUrl}${blog.image}`" alt="" title="News image" /></nuxt-link>
                                                        </div>
                                                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                            <h4><nuxt-link :to="`/blog/${blog.slug}`"> {{blog.name}}</nuxt-link></h4>
                                                            <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> {{blog.created}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="trending-post-area">
                                <h3 class="title-bg">Trending Post</h3>
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <ul>
                                            <li>
                                                <a href="blog-single.html" class="hvr-bounce-to-right team-btn">The team</a><br/>
                                                <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> June 28, 2017</span>
                                                <h4><a href="blog-single.html"> Jake Dribbler Announced The <br />Reting Next Month </a></h4>
                                                <p>Lorem ipsum dolor sit amet, consectet dipis cing elit. Vivamus tincidunt quam eget trisp  nunc sed mattis phasellus.</p>
                                            </li>
                                            <li>
                                                <a href="blog-single.html" class="hvr-bounce-to-right team-btn">The team</a><br/>
                                                <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> June 28, 2017</span>
                                                <h4><a href="blog-single.html"> Jake Dribbler Announced The <br />Reting Next Month </a></h4>
                                                <p>Lorem ipsum dolor sit amet, consectet dipis cing elit. Vivamus tincidunt quam eget trisp  nunc sed mattis phasellus.</p>
                                            </li>
                                            <li>
                                                <a href="blog-single.html" class="hvr-bounce-to-right team-btn">The team</a><br/>
                                                <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> June 28, 2017</span>
                                                <h4><a href="blog-single.html"> Jake Dribbler Announced The <br />Reting Next Month </a></h4>
                                                <p>Lorem ipsum dolor sit amet, consectet dipis cing elit. Vivamus tincidunt quam eget trisp  nunc sed mattis phasellus.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="add">
                                <img src="/images/add/2.jpg" alt="Add">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import chunk from 'lodash/chunk';
  import { getCategory } from '~/apollo/queries/category';
  import { queryPagination } from '~/apollo/queries/blog';
  import { API_URL } from '~/config/api';
  import Pagination from '~/components/Pagination.vue';
  export default {
    async asyncData ({params, app}, callback) {
      try {
        const slug = params.slug ? params.slug : '';
        const client = app.apolloProvider.defaultClient;
        const dataCategory = await client.query({query: getCategory, variables: {slug : slug}});
        if (dataCategory.data.categorySlug === null) {
          callback(null, {category: {}, error: {message: 'Not exist categoty'}});
        } else {
          callback(null, {category: dataCategory.data.categorySlug, error: {}});
        }
      } catch(error) {
        callback(null, {category: {}, error: error})
      }
    },
    data() {
      return {
        start: 0,
        length: 3,
        blogPagination: {
          data: [],
          count: 0,
          hasNextPage: false,
        },
        chunk: chunk,
        apiUrl: API_URL
      }
    },
    apollo: {
      blogPagination: {
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
      changeLengthPanination(value) {
        this.length = value;
      },
      changeStartPagination(value) {
        this.start = value;
      }
    },
    components: {
      Pagination
    }
  }
</script>
