<template>
    <div v-if="$apollo.loading">
        loading
    </div>
    <div v-else>
        <div v-if="blogSlug===null">
            Not get blog
        </div>
        <div v-else>
            <div class="inner-page-header">
                <div class="banner">
                    <img :src="`${apiUrl}${blogSlug.image}`" :alt="blogSlug.name" style="max-height: 401px; width: 100%">
                </div>
                <div class="banner-text">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="header-page-locator">
                                    <ul>
                                        <li>
                                            <nuxt-link to="/">Home <i class="fa fa-compress" aria-hidden="true"></i>
                                            </nuxt-link>
                                            <nuxt-link to="/blog">Blog <i class="fa fa-compress" aria-hidden="true"></i>
                                            </nuxt-link>
                                            {{blogSlug.name}}
                                        </li>
                                    </ul>
                                </div>
                                <div class="header-page-title">
                                    <h1>{{blogSlug.name}}</h1>
                                </div>
                                <div class="header-page-subtitle">
                                    <p>{{blogSlug.description}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Inner Page Header serction end here -->

            <!-- Blog Single Start Here -->
            <div class="single-blog-page-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div class="single-image">
                                <img :src="`${apiUrl}${blogSlug.image}`" :alt="blogSlug.name"
                                     style="width: 100%; max-height: 350px">
                            </div>
                            <!--<h3><a href="#">{{blog.name}}</a></h3>-->
                            <div v-html="blogSlug.content"/>
                            <div class="share-section">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 life-style">
                                        <span class="author">
                                            <a href="#"><i class="fa fa-user-o" aria-hidden="true"></i> Admin </a>
                                        </span>
                                        <span class="comment">
                                            <a href="#">
                                            <i class="fa fa-comment-o" aria-hidden="true"></i> {{blogSlug.comments.length}}</a>
                                            </span>
                                        <span class="date">
                                            <i class="fa fa-calendar-check-o" aria-hidden="true"></i> {{blogSlug.created}}
                                            </span>
                                        <span class="cat">
                                            <nuxt-link to="/category"><i class="fa fa-folder-o" aria-hidden="true"></i> {{blogSlug.category && blogSlug.category.name ? blogSlug.category.name: 'Category'}} </nuxt-link>
                                        </span>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <ul class="share-link">
                                            <li class="hvr-bounce-to-right"><a href="#"> Tags:</a></li>
                                            <li class="hvr-bounce-to-right" v-for="tag of blogSlug.tags" v-bind:key="tag">
                                                <nuxt-link to="#"> {{tag}}</nuxt-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="share-section share-section2">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <span> You Can Share It : </span>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <ul class="share-link">
                                            <li class="hvr-bounce-to-right"><a href="#"> <i class="fa fa-facebook"
                                                                                            aria-hidden="true"></i>
                                                Facebook</a></li>
                                            <li class="hvr-bounce-to-right"><a href="#"><i class="fa fa-twitter"
                                                                                           aria-hidden="true"></i>
                                                Twitter</a></li>
                                            <li class="hvr-bounce-to-right"><a href="#"><i class="fa fa-google"
                                                                                           aria-hidden="true"></i>
                                                Google</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <ul class="next-pre-section">
                                        <li class="left-arrow"><a href="#"><i class="fa fa-angle-left"
                                                                              aria-hidden="true"></i> Previous Post</a>
                                        </li>
                                        <li class="right-arrow"><a href="#">Next Post <i class="fa fa-angle-right"
                                                                                         aria-hidden="true"></i> </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="like-section">
                                <h3 class="title-bg">YOU MIGHT ALSO LIKE</h3>
                                <div class="row">
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12"
                                         v-for="(blogDetail, index) in blogs" v-bind:key="blogDetail.id" v-if="index<3">
                                        <div class="popular-post-img">
                                            <nuxt-link :to="`/blog/${blogDetail.slug}`"><img
                                                    :src="`${apiUrl}${blogDetail.image}`" :alt="blogDetail.name">
                                            </nuxt-link>
                                        </div>
                                        <h3>
                                            <nuxt-link :to="`/blog/${blogDetail.slug}`">{{blogDetail.name}}</nuxt-link>
                                        </h3>
                                        <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> {{blogDetail.created}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="author-comment">
                                <h3 class="title-bg">Recent Comments</h3>
                                <ul v-if="blogSlug.comments.length>0">
                                    <li v-for="comment of blogSlug.comments" v-bind:key="comment.id">
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
                            <!--<div>-->
                            <!--<pagination :length="length" :hasNextPage="comments.hasNextPage" :count="comments.count" :start="comments.start" :changeStartPagination="changeStartPagination"/>-->
                            <!--</div>-->
                            <div class="leave-comments-area">
                                <h4 class="title-bg">Leave Comments</h4>
                                <form>
                                    <p v-if="errorComment.message" style="color: red; margin-bottom: 22px">Error:
                                        {{errorComment.message}}</p>
                                    <fieldset>
                                        <div class="form-group">
                                            <label>Name*</label>
                                            <input type="text" class="form-control" v-model="comment.name">
                                        </div>
                                        <div class="form-group">
                                            <label>Email*</label>
                                            <input type="email" class="form-control" v-model="comment.email">
                                        </div>

                                        <div class="form-group">
                                            <label>Website</label>
                                            <input type="website" class="form-control" v-model="comment.website">
                                        </div>
                                        <div class="form-group">
                                            <label>Your comment here...</label>
                                            <textarea cols="40" rows="10" class="textarea form-control"
                                                      v-model="comment.comment"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <a class="btn-send" @click="clickAddComment($event)">
                                                <i class="fa fa-circle-o-notch fa-spin" v-if="loading===true"></i> Post
                                                Comment
                                            </a>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <!-- Blog Single Sidebar Start Here -->
                            <div class="sidebar-area">
                                <div class="like-box-area">
                                    <ul>
                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i> <span
                                                class="like-page">like our facebook page <br/>210,956 likes</span> <span
                                                class="like"><i class="fa fa-plus" aria-hidden="true"></i></span></a>
                                        </li>
                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> <span
                                                class="like-page">Follow us on twitter<br/>2109 followers</span> <span
                                                class="like">
            <i class="fa fa-plus" aria-hidden="true"></i></span></a></li>
                                        <li><a href="#"><i class="fa fa-rss" aria-hidden="true"></i> <span
                                                class="like-page">Subscribe to our rss <br/>210,956 likes</span> <span
                                                class="like"><i class="fa fa-plus" aria-hidden="true"></i></span></a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="recent-post-area hot-news">
                                    <h3 class="title-bg">Recent Post</h3>
                                    <ul class="news-post">
                                        <li v-for="(blogDetail, index) in blogs" v-bind:key="blogDetail.id"
                                            v-if="index<4">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 content">
                                                    <div class="item-post">
                                                        <div class="row">
                                                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 paddimg-right-none">
                                                                <nuxt-link :to="`/blog/${blogDetail.slug}`"><img
                                                                        :src="`${apiUrl}${blogDetail.image}`" alt=""
                                                                        :title="blogDetail.name"/></nuxt-link>
                                                            </div>
                                                            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                                <h4>
                                                                    <nuxt-link :to="`/blog/${blogDetail.slug}`">
                                                                        {{blogDetail.name}}
                                                                    </nuxt-link>
                                                                </h4>
                                                                <span class="date"><i class="fa fa-calendar-check-o"
                                                                                      aria-hidden="true"></i> {{blogDetail.created}}</span>
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
                                                    <a href="category.html" class="hvr-bounce-to-right team-btn">The
                                                        team</a><br/>
                                                    <span class="date"><i class="fa fa-calendar-check-o"
                                                                          aria-hidden="true"></i> June 28, 2017</span>
                                                    <h4><a href="category.html"> Jake Dribbler Announced The <br/>Reting
                                                        Next Month </a></h4>
                                                    <p>Lorem ipsum dolor sit amet, consectet dipis cing elit. Vivamus
                                                        tincidunt quam eget trisp nunc sed mattis phasellus.</p>
                                                </li>
                                                <li>
                                                    <a href="category.html" class="hvr-bounce-to-right team-btn">The
                                                        team</a><br/>
                                                    <span class="date"><i class="fa fa-calendar-check-o"
                                                                          aria-hidden="true"></i> June 28, 2017</span>
                                                    <h4><a href="category.html"> Jake Dribbler Announced The <br/>Reting
                                                        Next Month </a></h4>
                                                    <p>Lorem ipsum dolor sit amet, consectet dipis cing elit. Vivamus
                                                        tincidunt quam eget trisp nunc sed mattis phasellus.</p>
                                                </li>
                                                <li>
                                                    <a href="category.html" class="hvr-bounce-to-right team-btn">The
                                                        team</a><br/>
                                                    <span class="date"><i class="fa fa-calendar-check-o"
                                                                          aria-hidden="true"></i> June 28, 2017</span>
                                                    <h4><a href="category.html"> Jake Dribbler Announced The <br/>Reting
                                                        Next Month </a></h4>
                                                    <p>Lorem ipsum dolor sit amet, consectet dipis cing elit. Vivamus
                                                        tincidunt quam eget trisp nunc sed mattis phasellus.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="add">
                                    <img src="/images/add/4.jpg" alt="Add">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import Pagination from '~/components/Pagination.vue'
  import { query, getBlogBySlug } from '~/apollo/queries/blog'
  import { API_URL } from '~/config/api'

  export default {
    data () {
      return {
        blogs: [],
        apiUrl: API_URL,
        comment: {},
        blogSlug: null
      }
    },
    apollo: {
      blogs: {
        query: query,
        fetchPolicy: 'cache-and-network',
      },
      blogSlug: {
        query: getBlogBySlug,
        variables: function () {
          return {
            slug: this.$route.params.slug ? this.$route.params.slug : '',
          }
        },
        fetchPolicy: 'cache-and-network',
      }
    },
    methods: {
      ...mapActions({
        addComment: 'comment/addComment',
      }),
      async clickAddComment (e) {
        const data = {
          input: {...this.comment, blog_id: this.blogSlug.id},
          slug: this.$route.params.slug
        }
        await this.addComment(data)
        if (!this.errorComment.message) {
          this.comment = {}
        }
        e.preventDefault()
      }
    }
    ,
    computed: {
      loading () { return this.$store.state.comment.loading},
      errorComment () { return this.$store.state.comment.error},
    },
    components: {
      Pagination
    }
  }
</script>

