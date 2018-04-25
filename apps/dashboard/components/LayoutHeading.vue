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
                                <ul class="menu">
                                    <li><!-- start message -->
                                        <nuxt-link to="#">
                                            <div class="pull-left">
                                                <img src="/dist/img/user2-160x160.jpg" class="img-circle"
                                                     alt="User Image">
                                            </div>
                                            <h4>
                                                Support Team
                                                <small><i class="fa fa-clock-o"></i> 5 mins</small>
                                            </h4>
                                            <p>Why not buy a new awesome theme?</p>
                                        </nuxt-link>
                                    </li>
                                    <!-- end message -->
                                    <li>
                                        <nuxt-link to="#">
                                            <div class="pull-left">
                                                <img src="/dist/img/user3-128x128.jpg" class="img-circle"
                                                     alt="User Image">
                                            </div>
                                            <h4>
                                                AdminLTE Design Team
                                                <small><i class="fa fa-clock-o"></i> 2 hours</small>
                                            </h4>
                                            <p>Why not buy a new awesome theme?</p>
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="#">
                                            <div class="pull-left">
                                                <img src="/dist/img/user4-128x128.jpg" class="img-circle"
                                                     alt="User Image">
                                            </div>
                                            <h4>
                                                Developers
                                                <small><i class="fa fa-clock-o"></i> Today</small>
                                            </h4>
                                            <p>Why not buy a new awesome theme?</p>
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="#">
                                            <div class="pull-left">
                                                <img src="/dist/img/user3-128x128.jpg" class="img-circle"
                                                     alt="User Image">
                                            </div>
                                            <h4>
                                                Sales Department
                                                <small><i class="fa fa-clock-o"></i> Yesterday</small>
                                            </h4>
                                            <p>Why not buy a new awesome theme?</p>
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="#">
                                            <div class="pull-left">
                                                <img src="/dist/img/user4-128x128.jpg" class="img-circle"
                                                     alt="User Image">
                                            </div>
                                            <h4>
                                                Reviewers
                                                <small><i class="fa fa-clock-o"></i> 2 days</small>
                                            </h4>
                                            <p>Why not buy a new awesome theme?</p>
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="footer"><nuxt-link to="#">See All Messages</nuxt-link></li>
                        </ul>
                    </li>
                    <!-- User Account: style can be found in dropdown.less -->
                    <li class="dropdown user user-menu">
                        <nuxt-link to="#" class="dropdown-toggle" data-toggle="dropdown">
                            <img src="/dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
                            <span class="hidden-xs">{{authUser!== null ? authUser.user.name : 'Admin'}}</span>
                        </nuxt-link>
                        <ul class="dropdown-menu">
                            <!-- User image -->
                            <li class="user-header">
                                <img src="/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">

                                <p>
                                    Alexander Pierce - Web Developer
                                    <small>Member since Nov. 2012</small>
                                </p>
                            </li>
                            <!-- Menu Body -->
                            <li class="user-body">
                                <div class="row">
                                    <div class="col-xs-4 text-center">
                                        <nuxt-link to="#">Followers</nuxt-link>
                                    </div>
                                    <div class="col-xs-4 text-center">
                                        <nuxt-link to="#">Sales</nuxt-link>
                                    </div>
                                    <div class="col-xs-4 text-center">
                                        <nuxt-link to="#">Friends</nuxt-link>
                                    </div>
                                </div>
                                <!-- /.row -->
                            </li>
                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <div class="pull-left">
                                    <nuxt-link to="#" class="btn btn-default btn-flat">Profile</nuxt-link>
                                </div>
                                <div class="pull-right">
                                    <nuxt-link to="#" class="btn btn-default btn-flat">Sign out</nuxt-link>
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
    import { countUnReadContactQuery } from '~/apollo/queries/contact';
    export default {
      computed: {
        authUser () { return this.$store.state.authUser },
      },
      data() {
        return {
          countUnReadContact: 0
        };
      },
      apollo: {
        countUnReadContact: {
          query: countUnReadContactQuery,
          fetchPolicy: 'cache-and-network',
        }
      },
    }
</script>
