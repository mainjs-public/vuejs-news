<template>
    <header class="main-header">
        <!-- Logo -->
        <nuxt-link exact to="/" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <!--<span class="logo-mini"><b>A</b>LT</span>-->
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg">
                <b>Admin</b>
            </span>
        </nuxt-link>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">
            <!-- Sidebar toggle button-->
            <nuxt-link to="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
                <span class="sr-only">Toggle navigation</span>
            </nuxt-link>
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <!-- Messages: style can be found in dropdown.less-->
                    <li class="dropdown messages-menu">
                        <nuxt-link to="#" class="dropdown-toggle" data-toggle="dropdown">
                            <i class="fa fa-envelope-o"></i>
                            <span class="label label-success">{{countUnReadContact}}</span>
                        </nuxt-link>
                        <ul class="dropdown-menu">
                            <li class="header">You have {{countUnReadContact}} messages</li>
                            <li>
                                <!-- inner menu: contains the actual data -->
                                <ul class="menu" v-if="contactPagination.data.length > 0">
                                    <li v-for="contact of contactPagination.data" v-bind:key="contact.id"><!-- start message -->
                                        <a @click="readContactClick(contact)">
                                            <div class="pull-left">
                                                <img src="/dashboard/dist/img/user2-160x160.jpg" class="img-circle"
                                                     alt="User Image">
                                            </div>
                                            <h4>
                                                {{contact.firstName}} {{contact.lastName}}
                                                <small><i class="fa fa-clock-o"></i> {{contact.created}}</small>
                                            </h4>
                                            <p style="margin-right: 10px; overflow: hidden;">{{contact.message}}</p>
                                        </a>
                                    </li>
                                    <!-- end message -->
                                </ul>
                                <div v-else>Empty</div>
                            </li>
                            <li class="footer"><nuxt-link to="/contact">See All Messages</nuxt-link></li>
                        </ul>
                    </li>
                    <!-- User Account: style can be found in dropdown.less -->
                    <li class="dropdown user user-menu">
                        <nuxt-link to="#" class="dropdown-toggle" data-toggle="dropdown">
                            <img src="/dashboard/dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
                            <span class="hidden-xs">{{authUser && authUser.user && authUser.user.name ? authUser.user.name : 'Admin'}}</span>
                        </nuxt-link>
                        <ul class="dropdown-menu">
                            <!-- User image -->
                            <li class="user-header">
                                <img src="/dashboard/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">

                                <p>
                                    {{authUser && authUser.user && authUser.user.name? authUser.user.name : 'Admin'}}
                                    <small>{{authUser && authUser.user && authUser.user.email ? authUser.user.email : 'email'}}</small>
                                </p>
                            </li>
                            <li class="user-footer">
                                <div class="pull-left">
                                    <a :href="frontPage" target="_blank" class="btn btn-default btn-flat">Front Page</a>
                                </div>
                                <div class="pull-right">
                                    <a @click="logoutClick($event)" class="btn btn-default btn-flat">Sign out</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
<script>
    import { mapActions} from 'vuex';
    import omit from 'lodash/omit';
    import { countUnReadContactQuery, queryPagination } from '~/apollo/queries/contact';
    import { FRONT_PAGE } from '~/config/api';

    export default {
      computed: {
        authUser () {return this.$store.state.auth},
      },
      data() {
        return {
          countUnReadContact: 0,
          contactPagination: {
            data: []
          },
          frontPage: FRONT_PAGE,
        };
      },
      apollo: {
        countUnReadContact: {
          query: countUnReadContactQuery,
          fetchPolicy: 'cache-and-network',
        },
        contactPagination: {
          query: queryPagination,
          variables: {
            start: 0,
            length: 5
          },
          fetchPolicy: 'cache-and-network',
        }
      },
      methods: {
        ...mapActions({
          logout: 'logout',
          readContact: 'contact/readContact',
        }),
        logoutClick(event) {
          this.logout();
          event.preventDefault();
        },
        readContactClick(data) {
          this.readContact(omit(data, ['__typename']));
        },
      }
    }
</script>
