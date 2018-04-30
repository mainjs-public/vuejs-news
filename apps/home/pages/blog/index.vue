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
            <div class="row" v-for="(rowBlog, index) in chunk(blogPagination.data, 2)" v-bind:key="index">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" v-for="blog of rowBlog" v-bind:key="blog.id">
                    <ul>
                        <li>
                           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <div class="blog-image">
                                  <nuxt-link :to="`/blog/${blog.slug}`">
                                     <i class="fa fa-link" aria-hidden="true"></i>
                                     <img :src="`${apiUrl}${blog.image}`" alt="Blog photo" />
                                  </nuxt-link>
                              </div>
                           </div>
                           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <span class="date"> <i class="fa fa-calendar-check-o" aria-hidden="true"> </i>{{blog.created}}</span>
                              <h3><nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link></h3>
                              <span class="admin"><nuxt-link to="#"><i class="fa fa-user-o" aria-hidden="true"></i> Admin</nuxt-link></span> <span class="like"><a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i>  {{blog.comments.length}} </a></span>
                              <p>{{blog.description}}</p>
                              <nuxt-link :to="`/blog/${blog.slug}`" class="more">Read More <i class="fa fa-angle-double-right" aria-hidden="true"></i></nuxt-link>
                           </div>
                        </li>
                    </ul>
                </div>
            </div>
         </div>
         <pagination :length="length" :hasNextPage="blogPagination.hasNextPage" :count="blogPagination.count" :start="start" :changeStartPagination="changeStartPagination"/>
      </div>
   </div>
</template>
<script>
    import { queryPagination } from '~/apollo/queries/blog';
    import chunk from 'lodash/chunk';
    import { API_URL } from '~/config/api';
    import Pagination from '~/components/Pagination.vue'
    export default {
      data() {
        return {
          start: 0,
          length: 1,
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
