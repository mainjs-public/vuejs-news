<template>
    <div v-if="error!==null">
        {{error}}
    </div>
    <div v-else>
        <div class="container">
            <div class="row">
                <breaking-news :blogs="blogs"/>
                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 padding-0">
                    <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        <!-- Indicators -->

                        <!-- Wrapper for slides -->
                        <div class="carousel-inner" role="listbox">

                            <div v-for="(blog, index) in blogs" v-if="index<2" v-bind:key="blog.id" :class="{item:true, active: index === 0}">
                                <div class="slider-area">
                                    <div class="bend niceties preview-2">
                                        <div id="ensign-nivoslider" class="slides nivoSlider">
                                            <img class="nivo-main-image" :src="`${apiUrl}${blog.image}`" style="display: inline; overflow: hidden;">
                                            <div class="nivo-caption" style="display: block;">
                                                <div class="slider-content t-cn s-tb slider-1">
                                                    <div class="title-container s-tb-c">
                                                        <div class="slider-botton">
                                                            <ul>
                                                                <li>
                                                                    <nuxt-link class="cat-link"  :to="`/category/${blog.category ? blog.category.slug : ''}`">{{blog.category !== null ? blog.category.name: 'Category'}}</nuxt-link>
                                                                    <span class="date">
                                                                        <i class="fa fa-calendar-check-o" aria-hidden="true"></i> {{blog.created}}
                                                                    </span>
                                                                    <span class="comment">
                                                                        <a href="#"><i class="fa fa-comment-o" aria-hidden="true"></i> {{blog.comments.length}}
                                                                        </a>
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <h1 class="title1"><nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link></h1>
                                                        <div class="title2">{{blog.description}}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="nivo-directionNav">
                                                <a class="nivo-prevNav" href="#myCarousel" role="button" data-slide="prev">Prev</a>
                                                <a class="nivo-nextNav" href="#myCarousel" role="button" data-slide="next">Next</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Left and right controls -->
                    </div>
                </div>
                <!-- Slider Area End Here-->
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 paddimg-left-none">
                    <div class="slider-right">
                        <ul>
                            <li v-for="(blog,index ) in blogs" v-bind:key="blog.id" v-if="index<3">
                                <div class="right-content">
                                    <span class="category"><nuxt-link class="cat-link" :to="`/category/${blog.category ? blog.category.slug : ''}`">{{blog.category !== null ? blog.category.name: 'Category'}}</nuxt-link></span>
                                    <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"> </i> {{blog.created}}</span>
                                    <h3>
                                        <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link>
                                    </h3>
                                </div>
                                <div class="right-image">
                                    <nuxt-link :to="`/blog/${blog.slug}`">
                                        <img :src="`${apiUrl}${blog.image}`" alt="sidebar image"
                                             style="width: 100%; max-height: 172px">
                                    </nuxt-link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Slider Section end Here -->
        <!-- All News Section Start Here -->
        <div class="all-news-area">
            <div class="container">
                <!-- latest news Start Here -->
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 tab-home">
                        <ul class="nav nav-tabs">
                            <li class="title-bg">Latest News</li>
                            <li class="active"><a data-toggle="tab" href="#tab1">Highest Rated</a></li>
                            <li><a data-toggle="tab" href="#tab2">Week</a></li>
                            <li><a data-toggle="tab" href="#tab3">Hot Articals</a></li>
                            <li><a data-toggle="tab" href="#tab4">Previous</a></li>
                        </ul>
                        <div class="tab-content">
                            <div id="tab1" class="tab-pane fade in active">
                                <div class="tab-top-content">
                                    <div class="row" v-for="(blog, index) in blogs" v-bind:key="blog.id"
                                         v-if="index === 0">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 paddimg-right-none">
                                            <nuxt-link :to="`/blog/${blog.slug}`"><img :src="`${apiUrl}${blog.image}`"
                                                                                       alt="sidebar image"
                                                                                       style="width: 100%"/></nuxt-link>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 last-col">
                                            <span class="date"><a href="#"><i class="fa fa-user-o"
                                                                              aria-hidden="true"></i> james Bond </a></span>
                                            <span class="comment"><nuxt-link
                                                    :to="`/category/${blog.category ? blog.category.slug : ''}`"><i
                                                    class="fa fa-comment-o" aria-hidden="true"></i> {{blog.comments.length}}</nuxt-link></span>
                                            <h3>
                                                <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link>
                                            </h3>
                                            <p>{{blog.description}}</p>
                                            <nuxt-link :to="`/blog/${blog.slug}`" class="read-more hvr-bounce-to-right">
                                                Read More
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-bottom-content">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 tab-area"
                                             v-for="(blog, index) in blogs" v-bind:key="blog.id" v-if="index<4">
                                            <div class="col-sm-12 col-xs-3 img-tab">
                                                <nuxt-link :to="`/blog/${blog.slug}`"><img
                                                        :src="`${apiUrl}${blog.image}`" alt="News image"></nuxt-link>
                                            </div>
                                            <div class="col-sm-12 col-xs-9 img-content">
                                                <span class="date"><i class="fa fa-calendar-check-o"
                                                                      aria-hidden="true"> </i>{{blog.created}}</span>
                                                <h4>
                                                    <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab2" class="tab-pane fade">
                                <div class="tab-top-content">
                                    <div class="row" v-for="(blog, index) in blogs" v-bind:key="blog.id"
                                         v-if="index === 0">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 paddimg-right-none">
                                            <nuxt-link :to="`/blog/${blog.slug}`"><img :src="`${apiUrl}${blog.image}`"
                                                                                       alt="sidebar image"
                                                                                       style="width: 100%"></nuxt-link>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 last-col">
                                            <span class="date"><nuxt-link to="#"><i class="fa fa-user-o"
                                                                                    aria-hidden="true"></i> james Bond </nuxt-link></span>
                                            <span class="comment"><a href="#"><i class="fa fa-comment-o"
                                                                                 aria-hidden="true"></i> {{blog.comments.length}}</a></span>
                                            <h3>
                                                <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link>
                                            </h3>
                                            <p>{{blog.description}}</p>
                                            <nuxt-link :to="`/blog/${blog.slug}`" class="read-more hvr-bounce-to-right">
                                                Read More
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-bottom-content">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 tab-area"
                                             v-for="(blog, index) in blogs" v-bind:key="blog.id" v-if="index<4">
                                            <div class="col-sm-12 col-xs-3 img-tab">
                                                <nuxt-link :to="`/blog/${blog.slug}`"><img
                                                        :src="`${apiUrl}${blog.image}`" :alt="blog.name"></nuxt-link>
                                            </div>
                                            <div class="col-sm-12 col-xs-9 img-content">
                                                <span class="date"><i class="fa fa-calendar-check-o"
                                                                      aria-hidden="true"> </i>{{blog.created}}</span>
                                                <h4>
                                                    <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab3" class="tab-pane fade">
                                <div class="tab-top-content">
                                    <div class="row" v-for="(blog, index) in blogs" v-bind:key="blog.id"
                                         v-if="index === 0">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 paddimg-right-none">
                                            <nuxt-link :to="`/blog/${blog.slug}`"><img :src="`${apiUrl}${blog.image}`"
                                                                                       alt="sidebar image"
                                                                                       style="width: 100%"></nuxt-link>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 last-col">
                                            <span class="date"><a href="#"><i class="fa fa-user-o"
                                                                              aria-hidden="true"></i> james Bond </a></span>
                                            <span class="comment"><a href="#"><i class="fa fa-comment-o"
                                                                                 aria-hidden="true"></i> {{blog.comments.length}}</a></span>
                                            <h3>
                                                <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link>
                                            </h3>
                                            <p>{{blog.description}}</p>
                                            <nuxt-link :to="`/blog/${blog.slug}`" class="read-more hvr-bounce-to-right">
                                                Read More
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-bottom-content">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 tab-area"
                                             v-for="(blog, index) in blogs" v-bind:key="blog.id" v-if="index<4">
                                            <div class="col-sm-12 col-xs-3 img-tab">
                                                <nuxt-link :to="`/blog/${blog.slug}`"><img
                                                        :src="`${apiUrl}${blog.image}`" alt="News image"></nuxt-link>
                                            </div>
                                            <div class="col-sm-12 col-xs-9 img-content">
                                                <span class="date"><i class="fa fa-calendar-check-o"
                                                                      aria-hidden="true"> </i>{{blog.created}}</span>
                                                <h4>
                                                    <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab4" class="tab-pane fade">
                                <div class="tab-top-content">
                                    <div class="row" v-for="(blog, index) in blogs" v-bind:key="blog.id"
                                         v-if="index === 0">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 paddimg-right-none">
                                            <nuxt-link :to="`/blog/${blog.slug}`"><img :src="`${apiUrl}${blog.image}`"
                                                                                       alt="sidebar image"
                                                                                       style="width: 100%"></nuxt-link>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 last-col">
                                            <span class="date"><a href="#"><i class="fa fa-user-o"
                                                                              aria-hidden="true"></i> james Bond </a></span>
                                            <span class="comment"><a href="#"><i class="fa fa-comment-o"
                                                                                 aria-hidden="true"></i> {{blog.comments.length}}</a></span>
                                            <h3>
                                                <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link>
                                            </h3>
                                            <p>{{blog.description}}</p>
                                            <nuxt-link :to="`/blog/${blog.slug}`" class="read-more hvr-bounce-to-right">
                                                Read More
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-bottom-content">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 tab-area"
                                             v-for="(blog, index) in blogs" v-bind:key="blog.id" v-if="index<4">
                                            <div class="col-sm-12 col-xs-3 img-tab">
                                                <nuxt-link :to="`/blog/${blog.slug}`"><img
                                                        :src="`${apiUrl}${blog.image}`" alt="News image"></nuxt-link>
                                            </div>
                                            <div class="col-sm-12 col-xs-9 img-content">
                                                <span class="date"><i class="fa fa-calendar-check-o"
                                                                      aria-hidden="true"> </i>{{blog.created}}</span>
                                                <h4>
                                                    <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab5" class="tab-pane fade">
                                <div class="tab-top-content">
                                    <div class="row" v-for="(blog, index) in blogs" v-bind:key="blog.id"
                                         v-if="index === 0">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 paddimg-right-none">
                                            <a :to="`/blog/${blog.slug}`"><img :src="`${apiUrl}${blog.image}`"
                                                                               alt="sidebar image" style="width: 100%"></a>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 last-col">
                                            <span class="date"><a href="#"><i class="fa fa-user-o"
                                                                              aria-hidden="true"></i> james Bond </a></span>
                                            <span class="comment"><a href="#"><i class="fa fa-comment-o"
                                                                                 aria-hidden="true"></i> {{blog.comments.length}}</a></span>
                                            <h3>
                                                <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link>
                                            </h3>
                                            <p>{{blog.description}}</p>
                                            <nuxt-link :to="`/blog/${blog.slug}`" class="read-more hvr-bounce-to-right">
                                                Read More
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-bottom-content">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 tab-area"
                                             v-for="(blog, index) in blogs" v-bind:key="blog.id" v-if="index<4">
                                            <div class="col-sm-12 col-xs-3 img-tab">
                                                <nuxt-link :to="`/blog/${blog.slug}`"><img
                                                        :src="`${apiUrl}${blog.image}`" alt="News image"></nuxt-link>
                                            </div>
                                            <div class="col-sm-12 col-xs-9 img-content">
                                                <span class="date"><i class="fa fa-calendar-check-o"
                                                                      aria-hidden="true"> </i>{{blog.created}}</span>
                                                <h4>
                                                    <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Trending news  here-->
                        <div class="trending-news separator-large">
                            <div class="row">
                                <div class="view-area">
                                    <div class="col-sm-8">
                                        <h3 class="title-bg">Trending News</h3>
                                    </div>
                                    <div class="col-sm-4 text-right">
                                        <nuxt-link to="/blog">View More <i class="fa fa-angle-double-right"
                                                                           aria-hidden="true"></i></nuxt-link>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div class="list-col" v-for="(blog, index) in blogs" v-bind:key="blog.id"
                                         v-if="index===0">
                                        <nuxt-link :to="`/blog/${blog.slug}`"><img :src="`${apiUrl}${blog.image}`"
                                                                                   alt="" title="Trending image"
                                                                                   style="width: 100%;"/></nuxt-link>
                                        <div class="dsc">
                                            <span class="date"> <i class="fa fa-calendar-check-o"
                                                                   aria-hidden="true"></i> {{blog.created}} </span>
                                            <span class="comment"><nuxt-link :to="`/blog/${blog.slug}`"><i
                                                    class="fa fa-comment-o" aria-hidden="true"></i> {{blog.comments.length}}</nuxt-link></span>
                                            <h3>
                                                <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link>
                                            </h3>
                                            <p>{{blog.description}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <ul class="news-post">
                                        <li v-for="(blog, index) in blogs" v-bind:key="blog.id" v-if="index<4">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 content">
                                                    <div class="item-post">
                                                        <div class="row">
                                                            <div class="col-lg-4 col-md-4 col-sm-3 col-xs-3 paddimg-right-none">
                                                                <nuxt-link :to="`/blog/${blog.slug}`"><img
                                                                        :src="`${apiUrl}${blog.image}`" alt=""
                                                                        title="Trending image"></nuxt-link>
                                                            </div>
                                                            <div class="col-lg-8 col-md-8 col-sm-9 col-xs-9">
                                                                <h4>
                                                                    <nuxt-link :to="`/blog/${blog.slug}`">
                                                                        {{blog.name}}
                                                                    </nuxt-link>
                                                                </h4>
                                                                <span class="date"><i class="fa fa-calendar-check-o"
                                                                                      aria-hidden="true"></i> {{blog.created}}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!--Start what’s hot now -->
                        <div class="hot-news">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="view-area">
                                        <div class="row">
                                            <div class="col-sm-8">
                                                <h3 class="title-bg">What’s hot now</h3>
                                            </div>
                                            <div class="col-sm-4 text-right">
                                                <nuxt-link to="/blog">View More <i class="fa fa-angle-double-right"
                                                                                   aria-hidden="true"></i></nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="featured" v-for="(blog, index) in blogs" v-bind:key="blog.id"
                                         v-if="index===0">
                                        <div class="blog-img">
                                            <nuxt-link :to="`/blog/${blog.slug}`"><img :src="`${apiUrl}${blog.image}`"
                                                                                       alt="" title="News image"
                                                                                       style="width: 100%; max-height: 400px"/>
                                            </nuxt-link>
                                        </div>
                                        <div class="blog-content">
                                            <nuxt-link :to="`/category/${blog.category ? blog.category.slug : ''}`"
                                                       class="cat-link">{{blog.category!== null ? blog.category.name:
                                                'Category'}}
                                            </nuxt-link>
                                            <span class="date"><i
                                                    class="fa fa-calendar-check-o" aria-hidden="true"></i> {{blog.created}}</span>
                                            <h4>
                                                <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link>
                                            </h4>
                                        </div>
                                    </div>
                                    <ul class="news-post news-feature-mb">
                                        <li v-for="(blog, index) in blogs" v-bind:key="blog.id" v-if="index<4">
                                            <div class="row">
                                                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-4">
                                                    <nuxt-link :to="`/blog/${blog.slug}`"><img
                                                            :src="`${apiUrl}${blog.image}`" alt="News image"/>
                                                    </nuxt-link>
                                                </div>
                                                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-8 content">
                                                    <h4>
                                                        <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link>
                                                    </h4>
                                                    <span class="author"><a href="#"><i class="fa fa-user-o"
                                                                                        aria-hidden="true"></i> yeamin</a></span>
                                                    <span class="date"><i class="fa fa-calendar-check-o"
                                                                          aria-hidden="true"></i> {{blog.created}}</span>
                                                    <span class="comment"><a href="#"><i class="fa fa-comment-o"
                                                                                         aria-hidden="true"></i> {{blog.comments.length}}</a></span>
                                                    <p>{{blog.description}}</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- End what’s hot now -->
                    </div>
                    <!--Sidebar Start Here -->
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 paddimg-left-none sidebar-latest">
                        <!--Like Box Start Here -->
                        <div class="like-box">
                            <ul>
                                <li>
                                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i>
                                    </a><span>210,956 <br/>likes</span>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> </a><span>350,580 <br/>followers</span>
                                </li>
                                <li class="last">
                                    <a href="#"><i class="fa fa-rss" aria-hidden="true"></i> </a><span>210,956 <br/>subscribers</span>
                                </li>
                            </ul>
                        </div>
                        <!--Like Box End Here -->

                        <!--Add Start Here -->
                        <div class="add-section">
                            <img src="/images/add/2.jpg" alt="add image">
                        </div>
                        <!--Add Box End Here -->

                        <!--Newsletter Start Here -->
                        <div class="newsletter-info">
                            <form>
                                <fieldset>
                                    <div class="form-group">
                                        <h4>Subscribe to Newsletter</h4>
                                        <div class="newsletter">
                                            <input class="form-control" placeholder="Email address..." type="text">
                                            <button class="btn-send" type="submit">Subscribe</button>
                                            <p>Get the latest news stories in your inbox</p>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>

                        <!--Newsletter End Here -->

                        <!--popular Post Start Here -->
                        <div class="sidebar popular">
                            <h3 class="title-bg">Popular Now</h3>
                            <ul>
                                <li v-for="(blog, index) in blogs" v-if="index===0" v-bind:key="blog.id">
                                    <nuxt-link :to="`/category/${blog.category ? blog.category.slug : ''}`"
                                               class="category-btn hvr-bounce-to-right">{{blog.category !== null?
                                        blog.category.name:'Category'}}
                                    </nuxt-link>
                                    <div class="post-image"><img :src="`${apiUrl}${blog.image}`" alt="News image"></div>
                                    <div class="content">
                                        <h4>
                                            <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link>
                                        </h4>
                                        <span class="date">
                                        <i class="fa fa-calendar-check-o" aria-hidden="true"></i> {{blog.created}}
                                    </span>
                                        <span class="comment">
                                        <a href="#">
                                            <i class="fa fa-comment-o" aria-hidden="true"></i> {{blog.comments.length}}
                                        </a>
                                    </span>
                                    </div>
                                </li>
                            </ul>
                        </div>


                        <div class="hot-news popular-related">
                            <ul class="news-post">
                                <li v-for="(blog, index) in blogs" v-bind:key="blog.id" v-if="index<4">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 content">
                                            <div class="item-post">
                                                <div class="row">
                                                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-3 paddimg-right-none">
                                                        <img :src="`${apiUrl}${blog.image}`" alt="" title="News image">
                                                    </div>
                                                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-9">
                                                        <h4>
                                                            <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}
                                                            </nuxt-link>
                                                        </h4>
                                                        <span class="date"><i class="fa fa-calendar-check-o"
                                                                              aria-hidden="true"></i> {{blog.created}}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!--popular Post End Here -->

                        <!--Recent comments Start Here -->
                        <div class="recent-comments separator-large">
                            <div id="comments-Carousel" class="carousel carousel-comments slide" data-ride="carousel">
                                <!-- Wrapper for slides -->
                                <!-- Left and right controls -->
                                <div class="next-prev-top">
                                    <div class="row">
                                        <div class="col-sm-9 col-xs-9">
                                            <div class="view-area">
                                                <h3 class="title-bg">Recent Comments</h3>
                                            </div>
                                        </div>
                                        <div class="col-sm-3 col-xs-3 next-prev">
                                            <a class="left news-control" href="#comments-Carousel" data-slide="prev">
                                        <span class="news-arrow-left"><i class="fa fa-angle-left"
                                                                         aria-hidden="true"></i></span>
                                            </a>
                                            <a class="right news-control" href="#comments-Carousel" data-slide="next">
                                        <span class="news-arrow-right"><i class="fa fa-angle-right"
                                                                          aria-hidden="true"></i></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-inner">
                                    <div class="item active">
                                        <div class="dsc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipe isicing elit, sed do they
                                                eiusmod
                                                tempor incidin dunt ut labore et dolore</p>
                                            <span>- Thesera Minton</span>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="dsc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipe isicing elit, sed do they
                                                eiusmod
                                                tempor incidin dunt ut labore et dolore</p>
                                            <span>- Jon Min</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--Recent comments Start Here -->
                        <!--Add Start Here -->
                        <div class="add-section add-section2">
                            <img src="/images/add/3.jpg" alt="add image">
                        </div>
                        <!--Add Box End Here -->
                    </div>
                </div>
            </div>
        </div>
        <video-slides :videos="videos"/>
        <!-- Hot News Start Here -->
        <div class="hot-news">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <slug-blog-home title="Health & Lifestyle" :blogs="dataHealth"/>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <slug-blog-home title="Politics" :blogs="dataPilitic"/>
                            </div>
                        </div>
                        <!--End Two Slider -->
                        <!--Around Area Start Here -->
                        <slug-blog-home-2 :blogs="dataWorld"/>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 paddimg-left-none">
                        <h3 class="title-bg featured-title">Featured News</h3>
                        <div class="sidebar">
                            <ul>
                                <li v-for="(blog, index) in blogs" v-bind:key="blog.id" v-if="index<3">
                                    <nuxt-link :to="`/category/${blog.category ? blog.category.slug : ''}`"
                                               class="category-btn hvr-bounce-to-right">{{blog.category !== null ?
                                        blog.category.name: 'Category'}}
                                    </nuxt-link>
                                    <div class="post-image">
                                        <nuxt-link :to="`/blog/${blog.slug}`"><img :src="`${apiUrl}${blog.image}`"
                                                                                   alt="News image"/></nuxt-link>
                                    </div>
                                    <div class="content">
                                        <h4>
                                            <nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link>
                                        </h4>
                                        <span class="date">
                                        <i class="fa fa-calendar-check-o" aria-hidden="true"></i> {{blog.created}}
                                    </span>
                                        <span class="comment">
                                        <nuxt-link to="#">
                                            <i class="fa fa-comment-o" aria-hidden="true"></i> {{blog.comments.length}}
                                        </nuxt-link>
                                    </span>

                                    </div>
                                </li>
                            </ul>
                            <div class="categories-home separator-large3">
                                <h3 class="title-bg">Categories</h3>
                                <ul>
                                    <li v-for="category of categories" v-bind:key="category.id">
                                        <nuxt-link :to="`/category/${category.slug}`">
                                            <i class="fa fa-angle-right" aria-hidden="true"></i> {{category.name}}
                                            <span>{{category.blogs.length}}</span>
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- All News Section end Here -->
        <!-- Footer Area Section Start Here -->
        <div class="add-section separator-large2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <img :src="`${apiUrl}${setting.banner_2}`" alt="footer">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import BreakingNews from '~/components/BreakingNews.vue'
  import VideoSlides from '~/components/VideoSlides.vue'
  import SlugBlogHome from '~/components/SlugBlogHome.vue'
  import SlugBlogHome2 from '~/components/SlugBlogHome2.vue'
  import { getBlogLatest } from '~/apollo/queries/blog'
  import { query, getCategory } from '~/apollo/queries/category'
  import { API_URL } from 'shared/api'
  import chunk from 'lodash/chunk'
  const dataVideo = [
    {
      id: '1',
      name: 'Smart Packs Parking Sensor Tech 1',
      created: 'November 11, 2017',
      comments: [],
      link: 'http://www.youtube.com/watch?v=Cdajfy4voyY',
      image: '/images/fetuered/2.jpg',
    },
    {
      id: '2',
      name: 'Smart Packs Parking Sensor Tech 2',
      created: 'November 11, 2017',
      comments: [],
      link: 'http://www.youtube.com/watch?v=Cdajfy4voyY',
      image: '/images/fetuered/2.jpg',
    },
    {
      id: '3',
      name: 'Smart Packs Parking Sensor Tech 3',
      created: 'November 11, 2017',
      comments: [],
      link: 'http://www.youtube.com/watch?v=Cdajfy4voyY',
      image: '/images/fetuered/2.jpg',
    },
    {
      id: '4',
      name: 'Smart Packs Parking Sensor Tech 4',
      created: 'November 11, 2017',
      comments: [],
      link: 'http://www.youtube.com/watch?v=Cdajfy4voyY',
      image: '/images/fetuered/2.jpg',
    },
    {
      id: '5',
      name: 'Smart Packs Parking Sensor Tech 5',
      created: 'November 11, 2017',
      comments: [],
      link: 'http://www.youtube.com/watch?v=Cdajfy4voyY',
      image: '/images/fetuered/2.jpg',
    },
    {
      id: '6',
      name: 'Smart Packs Parking Sensor Tech 6',
      created: 'November 11, 2017',
      comments: [],
      link: 'http://www.youtube.com/watch?v=Cdajfy4voyY',
      image: '/images/fetuered/2.jpg',
    },
    {
      id: '7',
      name: 'Smart Packs Parking Sensor Tech 7',
      created: 'November 11, 2017',
      comments: [],
      link: 'http://www.youtube.com/watch?v=Cdajfy4voyY',
      image: '/images/fetuered/2.jpg',
    },
  ]
  export default {
    async asyncData (context, callback) {
      try {
        const client = context.app.apolloProvider.defaultClient
        const dataBlogs = await client.query({query: getBlogLatest, variables: {number: 10}})
        const dataCategory = await client.query({query: query})
        const dataHealth = await client.query({query: getCategory, variables: {slug : 'health-lifestyle', start: 0, length: 4}});
        const dataPilitic = await client.query({query: getCategory, variables: {slug : 'politics', start: 0, length: 4}});
        const dataWorld = await client.query({query: getCategory, variables: {slug : 'around-the-world', start: 0, length: 6}});
        callback(null, {
          blogs: dataBlogs.data.getBlogLatest !== null ? dataBlogs.data.getBlogLatest : [],
          categories: dataCategory.data.categories !== null ? dataCategory.data.categories: [],
          dataHealth:  dataHealth.data.categorySlug !== null? dataHealth.data.categorySlug.data: [],
          dataPilitic: dataPilitic.data.categorySlug !== null? dataPilitic.data.categorySlug.data:[],
          dataWorld: dataWorld.data.categorySlug !== null? dataWorld.data.categorySlug.data: [],
          error: null
        })
      } catch (error) {
        callback(null, {blogs: [], categories: [], dataHealth: [], error: error})
      }
    },
    data () {
      return {
        videos: dataVideo,
        chunk: chunk,
        apiUrl: API_URL
      }
    },
    computed: {
      setting () { return this.$store.state.setting},
    },
    components: {
      SlugBlogHome,
      SlugBlogHome2,
      BreakingNews,
      VideoSlides,
    }
  }
</script>
