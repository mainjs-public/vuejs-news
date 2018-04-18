<template>
   <div>
      <div class="inner-page-header">
         <div class="banner">
            <img src="/images/banner/3.jpg" alt="Banner">
         </div>
         <div class="banner-text">
            <div class="container">
               <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                     <div class="header-page-locator">
                        <ul>
                           <li><nuxt-link to="/">Home <i class="fa fa-compress" aria-hidden="true"></i> </nuxt-link> Blog Post</li>
                        </ul>
                     </div>
                     <div class="header-page-title">
                        <h1>Blog</h1>
                     </div>
                     <div class="header-page-subtitle">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                           <br>alteration in some form, by injected humou</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="blog-page-area">
         <div class="container">
            <div class="row" v-for="(rowBlog, index) in chunk(blogs,2)" v-bind:key="index">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" v-for="blog of rowBlog" v-bind:key="blog.id">
                    <ul>
                        <li>
                           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <div class="blog-image">
                                  <nuxt-link to="#">
                                     <i class="fa fa-link" aria-hidden="true"></i>
                                     <img :src="blog.image" alt="Blog photo" />
                                  </nuxt-link>
                              </div>
                           </div>
                           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <span class="date"> <i class="fa fa-calendar-check-o" aria-hidden="true"> </i>{{blog.created}}</span>
                              <h3><nuxt-link to="#">{{blog.name}}</nuxt-link></h3>
                              <span class="admin"><nuxt-link to="#"><i class="fa fa-user-o" aria-hidden="true"></i> Admin</nuxt-link></span> <span class="like"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i>  {{blog.comments.length}} </a></span>
                              <p>{{blog.description}}</p>
                              <nuxt-link to="#" class="more">Read More <i class="fa fa-angle-double-right" aria-hidden="true"></i></nuxt-link>
                           </div>
                        </li>
                    </ul>
                </div>
            </div>
         </div>
         <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
               <div class="pagination-area">
                  <ul>
                     <li><a href="#"><i class="fa fa-angle-left" aria-hidden="true"></i></a></li>
                     <li class="active"><a href="#">1</a></li>
                     <li><a href="#">2</a></li>
                     <li><a href="#">. . .</a></li>
                     <li><a href="#">3</a></li>
                     <li><a href="#">4</a></li>
                     <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
    import { query } from '~/apollo/queries/blog';
    import chunk from 'lodash/chunk';
    export default {
      data() {
        return {
          blogs: [],
          chunk: chunk,
        }
      },
      apollo: {
        blogs: {
          query: query,
          fetchPolicy: 'cache-and-network',
        }
      },
    }
</script>
