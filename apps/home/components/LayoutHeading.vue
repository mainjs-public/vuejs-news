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
                    <li><a :href="setting.link_facebook" class="active" target="_blank"><i class="fa fa-facebook"></i></a></li>
                    <li><a :href="setting.link_gmail" target="_blank"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                    <li><a :href="setting.link_twitter" target="_blank"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#" _blank><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>
                    <li><a href="#" _blank><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
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
                <nuxt-link to="/"><img :src="`${apiUrl}${setting.logo}`" alt="logo" /></nuxt-link>
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
                    <input type="text" v-model="search" class="form-control" placeholder="Search...">
                  </div>
                </div>
              </div>
              <div class="main-menu navbar-collapse collapse">
                <nav>
                  <ul>
                      <li v-for="megamenu of megamenuList" v-bind:key="megamenu.id">
                          <a :href="megamenu.data" v-if="megamenu.type === 'link'">{{megamenu.title}}
                              <i class="fa fa-chevron-down" aria-hidden="true" v-if="megamenu.children.length > 0"></i>
                              <ul class="sub-menu" v-if="megamenu.children.length > 0">
                                  <li v-for="submegamenu of orderBy(megamenu.children, ['order'],['asc'])" >
                                      <a :href="submegamenu.data" v-if="submegamenu.type === 'link'">{{submegamenu.title}}</a>
                                      <nuxt-link :to="submegamenu.data" v-else>{{submegamenu.title}}</nuxt-link>
                                  </li>
                              </ul>
                          </a>
                          <nuxt-link :to="megamenu.data" v-else class="has dropdown-toggle">{{megamenu.title}}
                              <i class="fa fa-chevron-down" aria-hidden="true" v-if="megamenu.children.length > 0"></i>
                              <ul class="sub-menu" v-if="megamenu.children.length > 0">
                                  <li v-for="submegamenu of orderBy(megamenu.children, ['order'],['asc'])" >
                                      <a :href="submegamenu.data" v-if="submegamenu.type === 'link'">{{submegamenu.title}}</a>
                                      <nuxt-link :to="submegamenu.data" v-else>{{submegamenu.title}}</nuxt-link>
                                  </li>
                              </ul>
                          </nuxt-link>
                      </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-hidden col-xs-hidden text-right search hidden-mobile">
              <form @submit.prevent="clickSearch">
                <a href="#search" @click="clickSearch()" data-toggle="collapse" class="search-icon"><i class="fa fa-search" aria-hidden="true"></i></a>
                <div id="search" class="collapse search-box">
                  <input type="text" v-model="search" class="form-control" placeholder="Search...">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
  import orderBy from 'lodash/orderBy';
  import { API_URL } from 'shared/api';
  export default {
    data() {
      return {
        search: ''
      }
    },
    computed: {
      categories () { return this.$store.state.categories},
      megamenuList () { return this.$store.state.megamenu},
      setting () { return this.$store.state.setting},
      orderBy () { return orderBy},
      apiUrl () { return API_URL},
    },
    methods: {
      clickSearch() {
        if (this.search !== '') {
          const key = this.search;
          this.search = '';
          this.$router.push(`/search?word=${key}`);
        }
      }
    }
  }
</script>
