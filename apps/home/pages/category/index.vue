<template>
    <div>
        <div class="inner-page-header">
            <div class="banner">
                <img :src="category.image" :alt="category.name" style="width: 100%; max-height: 401px">
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

        <!-- Category Page Start Here -->
        <div class="blog-page-area gallery-page category-page">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
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
                                                <div class="item" v-for="(blog, index) in blogs" v-bind:key="blog.id" v-bind:class="index=== 0? 'active': ''" v-if="index<4">
                                                    <div class="blog-image">
                                                        <nuxt-link :to="`/blog/${blog.slug}`">
                                                            <i class="fa fa-link" aria-hidden="true"></i>
                                                            <img :src="blog.image" alt="category photo" style="width: 100%; max-height: 470px">
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
                            <ul v-for="blog of blogs" v-bind:key="blog.id" v-if="blog.category && blog.category.id && blog.category.id === category.id">
                                <li>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="carousel-inner">
                                            <div class="blog-image">
                                                <nuxt-link :to="`/blog/${blog.slug}`">
                                                    <i class="fa fa-link" aria-hidden="true"></i>
                                                    <img :src="blog.image" alt="category photo" style="width: 100%; max-height: 270px">
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
                                    <li v-for="(blog, index) in blogs" v-bind:key="blog.id" v-if="index<4">
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 content">
                                                <div class="item-post">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 paddimg-right-none">
                                                            <nuxt-link :to="`/blog/${blog.slug}`"><img :src="blog.image" alt="" title="News image" /></nuxt-link>
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
  import { query, getCategory } from '~/apollo/queries/category';
  import { query as queryBlog } from '~/apollo/queries/blog';
  export default {
    data() {
      return {
        blogs: [],
        category: {},
      }
    },
    apollo: {
      categories: {
        query: query,
        fetchPolicy: 'cache-and-network',
      },
      blogs: {
        query: queryBlog,
        fetchPolicy: 'cache-and-network',
      },
      category: {
        query: getCategory,
        variables: {categoryId : '5ad553fbdfba3029c851a9ff'},
        fetchPolicy: 'cache-and-network',
      },

    },
  }
</script>
