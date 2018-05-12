<template>
    <div v-if="error.message">
        {{error.message}}
    </div>
    <div v-else>
        <div>
            <div class="inner-page-header">
                <div class="banner">
                    <img :src="`${apiUrl}${blog.image}`" :alt="blog.name" style="max-height: 401px; width: 100%">
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
                                            {{blog.name}}
                                        </li>
                                    </ul>
                                </div>
                                <div class="header-page-title">
                                    <h1>{{blog.name}}</h1>
                                </div>
                                <div class="header-page-subtitle">
                                    <p>{{blog.description}}</p>
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
                                <img :src="`${apiUrl}${blog.image}`" :alt="blog.name"
                                     style="width: 100%; max-height: 350px">
                            </div>
                            <!--<h3><a href="#">{{blog.name}}</a></h3>-->
                            <div v-html="blog.content"/>
                            <div class="share-section">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 life-style">
                                        <span class="author">
                                            <a href="#"><i class="fa fa-user-o" aria-hidden="true"></i> Admin </a>
                                        </span>
                                        <span class="comment">
                                            <a href="#">
                                            <i class="fa fa-comment-o" aria-hidden="true"></i> {{blog.comments.length}}</a>
                                            </span>
                                        <span class="date">
                                            <i class="fa fa-calendar-check-o" aria-hidden="true"></i> {{blog.created}}
                                        </span>
                                        <span class="cat">
                                            <nuxt-link :to="`/category/${blog.category && blog.category.slug ? blog.category.slug : ''}`"><i class="fa fa-folder-o" aria-hidden="true"></i> {{blog.category && blog.category.name ? blog.category.name: 'Category'}} </nuxt-link>
                                        </span>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <ul class="share-link">
                                            <li class="hvr-bounce-to-right"><a href="#"> Tags:</a></li>
                                            <li class="hvr-bounce-to-right" v-for="tag of blog.tags" v-bind:key="tag">
                                                <nuxt-link :to="`/tags/${kebabCase(tag)}`"> {{tag}}</nuxt-link>
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
                            <comment-blog :blogId="blog.id" :length="length" :start="start" :changeStartPagination="changeStartPagination" v-if="blog.id"/>
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
                        <content-right/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import kebabCase from 'lodash/kebabCase'
  import ContentRight from '~/components/ContentRight.vue'
  import CommentBlog from '~/components/CommentBlog.vue'
  import { query, getBlogBySlug } from '~/apollo/queries/blog'
  import { API_URL } from 'shared/api'

  export default {
    async asyncData({ params, app }, callback) {
      try {
        const slug = params.slug ? params.slug : '';
        const client = app.apolloProvider.defaultClient;
        const dataBlog= await client.query({query: getBlogBySlug, variables: {slug : slug}});
        callback(null, {blog: dataBlog.data.blogSlug, error: dataBlog.data.blogSlug === null ? {message: 'Not exist blog'}: {}});
      } catch(error) {
        callback(null, {blog: {}, error: error});
      }
    },
    data () {
      return {
        length: 10,
        start: 0,
        blogs: [],
        apiUrl: API_URL,
        comment: {},
        kebabCase: kebabCase,
      }
    },
    apollo: {
      blogs: {
        query: query,
        fetchPolicy: 'cache-and-network',
      },
    },
    methods: {
      ...mapActions({
        addComment: 'comment/addComment',
      }),
      async clickAddComment (e) {
        const data = {
          input: {...this.comment, blog_id: this.blog.id},
          length: this.length,
          start: this.start
        }
        await this.addComment(data)
        if (!this.errorComment.message) {
          this.comment = {}
        }
        e.preventDefault()
      },
      changeStartPagination(value) {
        this.start = value
      }
    }
    ,
    computed: {
      loading () { return this.$store.state.comment.loading},
      errorComment () { return this.$store.state.comment.error},
    },
    components: {
      ContentRight,
      CommentBlog
    }
  }
</script>

