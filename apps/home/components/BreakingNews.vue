<template>
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 padding-0">
        <div class="wrapper">
            <!-- News Slider -->
            <div class="ticker marg-botm">
                <div class="ticker-wrap">
                    <!-- News Slider Title -->
                    <div class="ticker-head up-case backg-colr col-md-2">Breaking News
                        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                    </div>
                    <div class="tickers col-md-10">
                        <div id="myCarousel1" class="carousel slide" data-ride="carousel">
                            <!-- Indicators -->

                            <!-- Wrapper for slides -->
                            <div class="carousel-inner" role="listbox">

                                <div v-for="(blogsShow, index) in data" v-bind:key="index" :class="{item:true, active: index === 0}">
                                    <div id="top-news-slider" class="owl-carousel owl-loaded owl-drag">
                                        <div class="owl-stage">
                                            <div class="owl-item col-sm-4" v-for="blog of blogsShow" v-bind:key="blog.id">
                                                <div class="item">
                                                    <nuxt-link :to="`/blog/${blog.slug}`">
                                                        <img :src="`${apiUrl}${blog.image}`"/>
                                                        <span>{{blog.name}}</span>
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-nav">
                                    <div class="owl-prev">
                                        <i href="#myCarousel1" class="fa fa-angle-left" role="button" data-slide="prev"></i>
                                    </div>
                                    <div class="owl-next">
                                        <i href="#myCarousel1" class="fa fa-angle-right" role="button" data-slide="next"></i>
                                    </div>
                                </div>
                            </div>

                            <!-- Left and right controls -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- End News Slider -->
        </div>
    </div>
</template>
<script>
  import { slideData } from '~/helpers/slides'
  import { API_URL } from 'shared/api'
  export default {
    props: ['blogs'],
    data() {
      return {
        data: slideData(this.blogs, 3),
        apiUrl: API_URL
      }
    }
  }
</script>
