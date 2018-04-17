<template>
  <div>
    <!--Preloader area Start here-->
    <!--<div class="preloader">-->
      <!--<div class="sk-cube-grid">-->
        <!--<div class="sk-cube sk-cube1"></div>-->
        <!--<div class="sk-cube sk-cube2"></div>-->
        <!--<div class="sk-cube sk-cube3"></div>-->
        <!--<div class="sk-cube sk-cube4"></div>-->
        <!--<div class="sk-cube sk-cube5"></div>-->
        <!--<div class="sk-cube sk-cube6"></div>-->
        <!--<div class="sk-cube sk-cube7"></div>-->
        <!--<div class="sk-cube sk-cube8"></div>-->
        <!--<div class="sk-cube sk-cube9"></div>-->
      <!--</div>-->
    <!--</div>-->
    <!--Preloader area end here-->

    <!--Header area start here-->
    <header>
      <div class="header-top-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
              <div class="header-top-left">
                <ul>
                  <li><span id="today"></span></li>
                  <li><nuxt-link to="/account">Sign In / Join</nuxt-link></li>
                  <li><nuxt-link to="/contact">Contact</nuxt-link></li>
                  <li>London, 27 <sup>o</sup> C</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="social-media-area">
                <nav>
                  <ul>
                    <li><a href="#" class="active"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-middle-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="logo-area">
                <nuxt-link to="/"><img src="/images/logo.png" alt="logo"></nuxt-link>
              </div>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
              <div class="right-banner">
                <img src="/images/add/1.png" alt="add image">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-bottom-area" id="sticky">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
              <div class="navbar-header">
                <div class="col-sm-8 col-xs-8 padding-null">
                  <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </button>
                </div>
                <div class="col-sm-4 col-xs-4 hidden-desktop text-right search">
                  <a href="#search-mobile" data-toggle="collapse" class="search-icon"><i class="fa fa-search"
                                                                                         aria-hidden="true"></i></a>
                  <div id="search-mobile" class="collapse search-box">
                    <input type="text" class="form-control" placeholder="Search...">
                  </div>
                </div>
              </div>
              <div class="main-menu navbar-collapse collapse">
                <nav>
                  <ul>
                    <li>
                      <nuxt-link to="/" class="has dropdown-toggle">Home </nuxt-link>
                    </li>
                    <li><a href="#" class="has">Mega Menu <i class="fa fa-chevron-down" aria-hidden="true"></i></a>
                      <ul class="sub-menu mega">
                        <div class="row">
                          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                              <a href="#"><img src="/images/category/1.jpg" alt=""></a>
                              <h3><a href="#">Holiday Money: The Ultimate Guide to Buying</a></h3>
                              <p>Nulla ullamcorper orci metus, eu imperdiet quam is a dapibus ac...</p>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                              <a href="#"><img src="/images/category/2.jpg" alt=""></a>
                              <h3><a href="#">The Exhibition Bankasy Doesn’t Want You to See </a></h3>
                              <p>Nulla ullamcorper orci metus, eu imperdiet quam is a dapibus ac...</p>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                              <a href="#"><img src="/images/category/5.jpg" alt=""></a>
                              <h3><a href="#">How to End Boom And Bust: Make Cash Illegal </a></h3>
                              <p>Nulla ullamcorper orci metus, eu imperdiet quam is a dapibus ac...</p>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                              <a href="#"><img src="/images/category/4.jpg" alt=""></a>
                              <h3><a href="#">Quiz: Turner Prize Nominee or Load of Old Rubbish? </a>
                              </h3>
                              <p>Nulla ullamcorper orci metus, eu imperdiet quam is a dapibus ac...</p>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li><a href="#" class="has">Pages <i class="fa fa-chevron-down" aria-hidden="true"></i></a>
                      <ul class="sub-menu">
                        <li><a href="/about">About</a></li>
                        <li class="has"><a href="/blog">Blog <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                          <ul>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/blog-single">Blog Single</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Category <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                          <ul>
                            <li><a href="/category">Category Style 1</a></li>
                            <li><a href="#">Category Style 2</a></li>
                            <li><a href="#">Category Style 3</a></li>
                            <li><a href="#">Category Style 4</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Gallery<i class="fa fa-angle-right" aria-hidden="true"></i></a>
                          <ul>
                            <li><a href="#">Gallery One</a></li>
                            <li><a href="#">Gallery Two</a></li>
                            <li><a href="#">Gallery Single</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Author <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                          <ul>
                            <li><a href="#">Author</a></li>
                            <li><a href="#">Author Single</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Testimonial</a></li>
                        <li><a href="/account">Account</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="#">Error-404</a></li>
                      </ul>
                    </li>
                    <li v-for="category of categories" v-bind:key="category.id">
                      <nuxt-link to="#">{{category.name}}</nuxt-link>
                    </li>
                    <li><nuxt-link to="#">Videos</nuxt-link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-hidden col-xs-hidden text-right search hidden-mobile">
              <a href="#search" data-toggle="collapse" class="search-icon"><i class="fa fa-search"
                                                                              aria-hidden="true"></i></a>
              <div id="search" class="collapse search-box">
                <input type="text" class="form-control" placeholder="Search...">
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
  export default {
    computed: {
      categories () { return this.$store.state.categories},
    },
  }
</script>
