<template>
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
               <li v-for="blog of recentPost" v-bind:key="blog.id">
                  <div class="row">
                     <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 content">
                        <div class="item-post">
                           <div class="row">
                              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 paddimg-right-none">
                                 <nuxt-link :to="`/blog/${blog.slug}`"><img :src="`${apiUrl}${blog.image}`" alt="" title="News image" style="width: 100%; max-height: 103px"/></nuxt-link>
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
         <div class="trending-post-area" v-if="trendingPost !== false">
            <h3 class="title-bg">Trending Post</h3>
            <div class="row">
               <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <ul>
                     <li v-for="(blog, index) in recentPost" v-bind:key="blog.id" v-if="index<3">
                        <nuxt-link :to="`/category/${blog.category && blog.category.slug ? blog.category.slug :'null'}`" class="hvr-bounce-to-right team-btn">{{blog.category && blog.category.name ? blog.category.name : 'Category'}}</nuxt-link><br/>
                        <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> {{blog.created}}</span>
                        <h4><nuxt-link :to="`/blog/${blog.slug}`"> {{blog.name}}</nuxt-link></h4>
                        <p>{{blog.description}}</p>
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
</template>
<script>
    import { API_URL } from 'shared/api';
    export default {
      props: ['trendingPost'],
      computed: {
        recentPost () { return this.$store.state.recentPost},
        apiUrl () { return API_URL},
      },
    }
</script>
