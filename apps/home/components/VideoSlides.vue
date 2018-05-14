<template>
    <div class="fetuered-videos">
        <div class="container">
            <div class="row">
                <div class="view-area">
                    <div class="col-sm-12">
                        <h3 class="title-bg">Fetuered Videos</h3>
                    </div>
                </div>
            </div>
            <div id="featured-videos-section" class="owl-carousel owl-loaded owl-drag">
                <div id="myCarouse2" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->

                    <!-- Wrapper for slides -->
                    <div class="carousel-inner" role="listbox">

                        <div v-for="(videoRow, index) in data" v-bind:key="index" :class="{item:true, active: index === 0}">
                            <div class="owl-item col-sm-12 col-md-4" v-for="video of videoRow" v-bind:key="video.id" style="margin: 0px; padding: 0px">
                                <div class="item">
                                    <div class="single-videos">
                                        <div class="images">
                                            <a href="#">
                                                <img :src="video.image" alt="">
                                            </a>
                                            <div class="overley">
                                                <div class="videos-icon">
                                                    <a class="popup-videos" :href="video.link"><img src="/images/fetuered/video-icon.png" alt=""></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="videos-text">
                                            <h3><a href="#">{{video.name}}</a></h3>
                                            <span class="date">
                                                <i class="fa fa-calendar-check-o" aria-hidden="true"></i> {{video.created}}
                                            </span>
                                            <span class="comment">
                                                <a href="#">
                                                    <i class="fa fa-comment-o" aria-hidden="true"></i> {{video.comments.length}}
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Left and right controls -->
                </div>
                <div class="owl-nav">
                    <div class="owl-prev"><i class="fa fa-angle-left" href="#myCarouse2" role="button" data-slide="prev"></i></div>
                    <div class="owl-next"><i class="fa fa-angle-right" href="#myCarouse2" role="button" data-slide="next"></i></div>
                </div>
                <div class="owl-dots disabled"></div>
            </div>
        </div>
    </div>
</template>

<script>
  import { slideData } from '~/helpers/slides'
  import { API_URL } from 'shared/api'
  export default {
    props: ['videos'],
    data() {
      return {
        data: slideData(this.videos, 3),
        apiUrl: API_URL
      }
    }
  }
</script>
