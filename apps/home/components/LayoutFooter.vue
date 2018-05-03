<template>
  <div>
    <footer>
      <div class="footer-top-area">
        <div class="container">
          <div class="row">
            <!-- Footer About Section Start Here -->
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="single-footer footer-one">
                <h3>About</h3>
                <div class="footer-logo"><img :src="`${apiUrl}${setting.logo_footer}`" alt="footer-logo" /></div>
                <p>{{setting.description}}</p>
                <p>We're social, connect with us:</p>
                <div class="footer-social-media-area">
                  <nav>
                    <ul>
                      <!-- Facebook Icon Here -->
                      <li><a :href="setting.link_facebook" target="_blank"><i class="fa fa-facebook"></i></a></li>
                      <!-- Google Icon Here -->
                      <li><a :href="setting.link_gmail" target="_blank"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                      <!-- Twitter Icon Here -->
                      <li><a :href="setting.link_twitter" target="_blank"><i class="fa fa-twitter"></i></a></li>
                      <!-- Vimeo Icon Here -->
                      <li><a href="#" target="_blank"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>
                      <!-- Pinterest Icon Here -->
                      <li><a href="#" target="_blank"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <!-- Footer About Section End Here -->

            <!-- Footer Popular Post Section Start Here -->
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="single-footer footer-two">
                <h3>Popular Posts</h3>
                <nav>
                  <ul>
                    <li>
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-4">
                        <a href="blog-single.html"><img src="/images/post-images/post-1.jpg" alt="post photo"></a>
                      </div>
                      <div class="col-lg-7 col-md-7 col-sm-7 col-xs-8">
                        <p><a href="blog-single.html">US should prepare for Russian election</a></p>
                        <span><i class="fa fa-calendar-check-o" aria-hidden="true"> </i> June  28,  2017</span>
                      </div>
                    </li>
                    <li>
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-4">
                        <a href="blog-single.html"><img src="/images/post-images/post-2.jpg" alt="post photo"></a>
                      </div>
                      <div class="col-lg-7 col-md-7 col-sm-7 col-xs-8">
                        <p><a href="blog-single.html">US should prepare for Russian election</a></p>
                        <span><i class="fa fa-calendar-check-o" aria-hidden="true"> </i> June  28,  2017</span>
                      </div>
                    </li>
                    <li>
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-4">
                        <a href="blog-single.html"><img src="/images/post-images/post-3.jpg" alt="post photo"></a>
                      </div>
                      <div class="col-lg-7 col-md-7 col-sm-7 col-xs-8">
                        <p><a href="blog-single.html">US should prepare for Russian election</a></p>
                        <span><i class="fa fa-calendar-check-o" aria-hidden="true"> </i> June  28,  2017</span>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <!-- Footer Popular Post Section End Here -->

            <!-- Footer From Flickr Section Start Here -->
            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div class="single-footer footer-three">
                <h3>From Flickr</h3>
                <ul>
                  <li>
                    <a href="#"><img src="/images/flicker/1.png" alt="flicker photo"></a>
                  </li>
                  <li>
                    <a href="#"><img src="/images/flicker/2.png" alt="flicker photo"></a>
                  </li>
                  <li>
                    <a href="#"><img src="/images/flicker/3.png" alt="flicker photo"></a>
                  </li>
                  <li>
                    <a href="#"><img src="/images/flicker/4.png" alt="flicker photo"></a>
                  </li>
                  <li>
                    <a href="#"><img src="/images/flicker/5.png" alt="flicker photo"></a>
                  </li>
                  <li>
                    <a href="#"><img src="/images/flicker/6.png" alt="flicker photo"></a>
                  </li>
                  <li>
                    <a href="#"><img src="/images/flicker/7.png" alt="flicker photo"></a>
                  </li>
                  <li>
                    <a href="#"><img src="/images/flicker/8.png" alt="flicker photo"></a>
                  </li>
                  <li>
                    <a href="#"><img src="/images/flicker/9.png" alt="flicker photo"></a>
                  </li>
                  <li>
                    <a href="#"><img src="/images/flicker/10.png" alt="flicker photo"></a>
                  </li>
                  <li>
                    <a href="#"><img src="/images/flicker/11.png" alt="flicker photo"></a>
                  </li>
                  <li>
                    <a href="#"><img src="/images/flicker/12.png" alt="flicker photo"></a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Footer From Flickr Section End Here -->
          </div>
        </div>
      </div>
      <!-- Footer Copyright Area Start Here -->
      <div class="footer-bottom-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="footer-bottom">
                <p>{{setting.footer}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer Copyright Area End Here -->
    </footer>

    <!-- Start scrollUp  -->
    <div id="return-to-top">
      <span>Top</span>
    </div>
  </div>
</template>

<script>
  import { API_URL } from '~/config/api';
  export default {
    computed: {
      setting () { return this.$store.state.setting},
      apiUrl () { return API_URL},
    },
  }
</script>
