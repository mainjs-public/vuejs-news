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
                    <li v-for="blog of popularPost" v-bind:key="blog.id">
                      <div class="col-lg-5 col-md-5 col-sm-5 col-xs-4">
                        <nuxt-link :to="`/blog/${blog.slug}`"><img :src="`${apiUrl}${blog.image}`" :alt="blog.name"></nuxt-link>
                      </div>
                      <div class="col-lg-7 col-md-7 col-sm-7 col-xs-8">
                        <p><nuxt-link :to="`/blog/${blog.slug}`">{{blog.name}}</nuxt-link></p>
                        <span><i class="fa fa-calendar-check-o" aria-hidden="true"> </i> {{blog.created}}</span>
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
                  <li v-for="blog of flickPost" v-bind:key="blog.id">
                    <nuxt-link :to="`/blog/${blog.slug}`"><img :src="`${apiUrl}${blog.image}`" :alt="blog.name"></nuxt-link>
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
  import { API_URL } from 'shared/api';
  export default {
    computed: {
      setting () { return this.$store.state.setting},
      popularPost () { return this.$store.state.popularPost},
      flickPost () { return this.$store.state.flickPost},
      apiUrl () { return API_URL},
    },
  }
</script>
