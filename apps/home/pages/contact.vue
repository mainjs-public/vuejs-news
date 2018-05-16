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
                        <div class="google-map" v-html="setting.map">
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
                            <p v-if="!success && error.message" style="color: red; margin-bottom: 22px">Error: {{error.message}}</p>
                            <p v-if="success" style="color: green; margin-bottom: 22px">Send contact success</p>
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
                                                    <i class="fa fa-circle-o-notch fa-spin" v-if="loading===true"></i>
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <content-right :trendingPost="false"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { addContact } from '~/apollo/queries/contact';
  import { getBlogLatest } from '~/apollo/queries/blog.js';
  import { API_URL } from 'shared/api';
  import ContentRight from '~/components/ContentRight.vue';

  const initData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    read: false
  }
  export default {
    async asyncData(context, callback) {
      try {
        const client = context.app.apolloProvider.defaultClient;
        const data = await client.query({query: getBlogLatest, variables: { number: 4 }});
        callback(null, { blogs: data.data.getBlogLatest })
      } catch(error) {
        callback(null, { blogs: [] })
      }
    },
    data() {
      return {
        data: {...initData},
        apiUrl: API_URL
      }
    },
    computed: {
      setting () { return this.$store.state.setting},
      loading () { return this.$store.state.contact.loading},
      error () { return this.$store.state.contact.error},
      success () { return this.$store.state.contact.success},
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
    },
    components: {
      ContentRight
    }
  }
</script>
