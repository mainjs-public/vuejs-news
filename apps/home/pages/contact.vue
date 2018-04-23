<template>
    <div>
        <div class="inner-page-header">
            <div class="banner">
                <img src="/images/banner/1.jpg" alt="Banner">
            </div>
            <div class="banner-text">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="header-page-locator">
                                <ul>
                                    <li><a href="index.html">Home <i class="fa fa-compress" aria-hidden="true"></i> </a> Single Post</li>
                                </ul>
                            </div>
                            <div class="header-page-title">
                                <h1>Contact Us</h1>
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
        <!-- Inner Page Header serction end here -->

        <!-- Contact Us Page Start Here -->
        <div class="single-blog-page-area contact-page-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                        <div class="google-map">
                            <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9364273.363926433!2d-12.392661146939734!3d55.03971934808962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited+Kingdom!5e0!3m2!1sen!2sbd!4v1500619264549"
                                    width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
                        </div>
                        <div class="location-area">
                            <div class="row">
                                <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                                    <h3>Location</h3>
                                    <p>{{setting.contact_location}}</p>
                                </div>
                                <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12">
                                    <ul>
                                        <li><i class="fa fa-map-marker" aria-hidden="true"></i> {{setting.address}}</li>
                                        <li><i class="fa fa-mobile" aria-hidden="true"></i> Phone: <a :href="`tel:${setting.phone}`">
                                            {{setting.phone}}</a></li>
                                        <li><i class="fa fa-fax" aria-hidden="true"></i> Fax:<a :href="`fax:${setting.fax}`">
                                            {{setting.fax}}</a></li>
                                        <li><i class="fa fa-envelope" aria-hidden="true"></i> <a
                                                :href="`mailto:${setting.mail}`">{{setting.mail}}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="leave-comments-area">
                            <h3>Contact Us</h3>
                            <div id="form-messages"></div>
                            <!--<span v-if="error.message" style="color: red">{{error.message}}</span>-->
                            <p v-if="error.message" style="color: red; margin-bottom: 22px">Error: {{error.message}}</p>
                            <form id="contact-form">
                                <fieldset>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" v-model="data.firstName" class="form-control" required
                                                       placeholder="First Name*">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" v-model="data.lastName" class="form-control" required
                                                       placeholder="Last Name*">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="email" v-model="data.email" class="form-control" required placeholder="Email*">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <input type="text" v-model="data.phone" class="form-control" required placeholder="Phone*">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <textarea cols="40" v-model="data.message" rows="10" class="textarea form-control" placeholder="Your Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <button class="btn-send" type="submit" @click="onSendContact($event)">
                                                    <i class="fa fa-circle-o-notch fa-spin" v-if="loading"></i>
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <div class="sidebar-area">
                            <div class="like-box-area">
                                <ul>
                                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i> <span class="like-page">like our facebook page <br/>210,956 likes</span>
                                        <span class="like"><i class="fa fa-plus" aria-hidden="true"></i></span></a></li>
                                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> <span class="like-page">Follow us on twitter<br/>2109 followers</span>
                                        <span class="like">
                                <i class="fa fa-plus" aria-hidden="true"></i></span></a></li>
                                    <li><a href="#"><i class="fa fa-rss" aria-hidden="true"></i> <span class="like-page">Subscribe to our rss <br/>210,956 likes</span>
                                        <span class="like"><i class="fa fa-plus" aria-hidden="true"></i></span></a></li>
                                </ul>
                            </div>
                            <div class="recent-post-area hot-news">
                                <h3 class="title-bg">Recent Post</h3>
                                <ul class="news-post">
                                    <li>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 content">
                                                <div class="item-post">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 paddimg-right-none">
                                                            <a href="blog-single.html"><img src="/images/popular/1.jpg" alt="" title="News image"/></a>
                                                        </div>
                                                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                            <h4><a href="blog-single.html"> US should prepare for<br/> Russian election</a></h4>
                                                            <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> June 28, 2017</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 content">
                                                <div class="item-post">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 paddimg-right-none">
                                                            <a href="blog-single.html"><img src="/images/popular/2.jpg" alt="" title="News image"/></a>
                                                        </div>
                                                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                            <h4><a href="blog-single.html">Pellentesque Odio Nisi <br/>Euismod In Pharet</a></h4>
                                                            <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i>June 28, 2017</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 content">
                                                <div class="item-post">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 paddimg-right-none">
                                                            <a href="blog-single.html"><img src="/images/popular/3.jpg" alt="" title="News image"/></a>
                                                        </div>
                                                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                            <h4><a href="blog-single.html"> Erant Aeque Neius No <br/>Numes Electram</a></h4>
                                                            <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i> June 28, 2017</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 content">
                                                <div class="item-post">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 paddimg-right-none">
                                                            <a href="blog-single.html"><img src="/images/popular/4.jpg" alt="" title="News image"/></a>
                                                        </div>
                                                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                            <h4><a href="blog-single.html">Erant Aeque Neius No <br/>Numes Electram</a></h4>
                                                            <span class="date"><i class="fa fa-calendar-check-o" aria-hidden="true"></i>June 28, 2017</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="add">
                                <img src="/images/add/4.jpg" alt="Add">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
  import { addContact } from '~/apollo/queries/contact';
  const initData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    read: false
  }
  export default {
    data() {
      return {
        data: {...initData},
      }
    },
    computed: {
      setting () { return this.$store.state.setting},
      loading () { return this.$store.state.contact.loading},
      error () { return this.$store.state.contact.error},
    },
    methods: {
      ...mapActions({
        addContact: 'contact/addContact',
      }),
      async onSendContact(e) {
        this.addContact(this.data);
        this.data = { ...initData}
        e.preventDefault();
      }
    }
  }
</script>

<style scoped>

</style>
