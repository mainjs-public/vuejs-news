<template>
    <div>
        <div :id="`news-Carouse${value}`" class="carousel carousel-news slide" data-ride="carousel">
            <!-- Wrapper for slides -->
            <!-- Left and right controls -->
            <div class="next-prev-top">
                <div class="row">
                    <div class="col-sm-9 col-xs-9">
                        <div class="view-area">
                            <h3 class="title-bg">{{title}}</h3>
                        </div>
                    </div>

                    <div class="col-sm-3 col-xs-3 next-prev">
                        <a class="left news-control" :href="`#news-Carouse${value}`" data-slide="prev">
                            <span class="news-arrow-left">
                                <i class="fa fa-angle-left" aria-hidden="true"></i>
                            </span>
                        </a>
                        <a class="right news-control" :href="`#news-Carouse${value}`" data-slide="next">
                            <span class="news-arrow-right">
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="carousel-inner" v-if="blogs && blogs.length>0">
                <div class="item" v-for="(blog, index) in blogs" v-bind:key="blog.id" v-bind:class="index===0? 'active': ''" v-if="blogs">
                    <nuxt-link :to="`/blog/${blog.slug}`">
                        <img :src="`${apiUrl}${blog.image}`"
                           alt=""
                           title="#slider-direction-1"
                           style="width: 100%;"
                        />
                    </nuxt-link>
                    <div class="dsc">
                        <span class="date">
                            <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                            {{blog.created}}
                        </span>
                        <span class="comment">
                            <nuxt-link to="#">
                                <i class="fa fa-comment-o" aria-hidden="true"></i> {{blog.comments.length}}
                            </nuxt-link>
                        </span>
                        <h4>
                            <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link>
                        </h4>
                        <p>{{blog.description}}</p>
                    </div>
                </div>
            </div>
            <div v-else>
                Empty blog
            </div>
        </div>
    </div>
</template>
<script>
    import { API_URL } from 'shared/api'
    import { getCategory } from '~/apollo/queries/category'
    export default {
      props: ['title', 'blogs'],
      data() {
        return {
          apiUrl: API_URL,
          value: this.title === 'Health & Lifestyle'? 1 : 2,
        }
      }
    }
</script>
