<template>
   <div>
      <div class="view-area separator-large3">
         <div class="row">
            <div class="col-sm-8">
               <h3 class="title-bg">Around the world</h3>
            </div>
            <div class="col-sm-4 text-right">
               <nuxt-link to="/category/around-the-world">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></nuxt-link>
            </div>
         </div>
      </div>
      <div v-if="blogs.length>0">
          <ul class="news-post news-post2 around-news" v-if="rowBlogs[0].length>0">
              <li>
                  <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 content"
                           v-for="blog of rowBlogs[0]" v-bind:key="blog.id">
                          <div class="item-post">

                              <div class="blog-image">
                                  <nuxt-link :to="`/blog/${blog.slug}`"><img
                                          :src="`${apiUrl}${blog.image}`" alt="" title="News image"
                                          style="width: 100%"/></nuxt-link>
                              </div>
                              <div class="content">
                                           <span class="date">
                                                <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                                                {{blog.created}}
                                            </span>
                                  <span class="comment">
                                                <nuxt-link to="#"> <i class="fa fa-comment-o" aria-hidden="true"></i> {{blog.comments.length}}
                                                </nuxt-link>
                                            </span>
                                  <h4>
                                      <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link>
                                  </h4>
                                  <p>{{blog.description}}</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </li>
          </ul>
          <ul class="news-post news-post2 related" v-if="rowBlogs.length > 1">
              <li v-for="(rowBlog, index) in rowBlogs" v-bind:key="index" v-if="index > 0">
                  <div class="row">
                      <div v-for="blog of rowBlog" v-bind:key="blog.id"
                           class="col-lg-6 col-md-6 col-sm-12 col-xs-12 content">
                          <div class="item-post">
                              <div class="row">
                                  <div class="col-lg-4 col-md-4 col-sm-4 col-xs-3 paddimg-right-none">
                                      <nuxt-link :to="`/blog/${blog.slug}`"><img
                                              :src="`${apiUrl}${blog.image}`" alt="" title="News image"/>
                                      </nuxt-link>
                                  </div>
                                  <div class="col-lg-8 col-md-8 col-sm-8 col-xs-9">
                                      <h4>
                                          <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link>
                                      </h4>
                                      <span class="date">
                              <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                              {{blog.created}}
                            </span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
      <div v-else>
          Empty blog
      </div>
   </div>
</template>
<script>
   import chunk from 'lodash/chunk'
   import { API_URL } from 'shared/api'
   export default {
     props: ['blogs'],
     data() {
       return {
         apiUrl: API_URL,
         rowBlogs: chunk(this.blogs, 2),
       }
     }
   }
</script>
