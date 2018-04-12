<template>
    <header class="main-header">
        <!-- Logo -->
        <nuxt-link exact to="/" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini"><b>A</b>LT</span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg"><b>Admin</b>LTE</span>
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
                            <span class="label label-success">4</span>
                        </nuxt-link>
                        <ul class="dropdown-menu">
                            <li class="header">You have 4 messages</li>
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
                    <!-- Notifications: style can be found in dropdown.less -->
                    <li class="dropdown notifications-menu">
                        <nuxt-link to="#" class="dropdown-toggle" data-toggle="dropdown">
                            <i class="fa fa-bell-o"></i>
                            <span class="label label-warning">10</span>
                        </nuxt-link>
                        <ul class="dropdown-menu">
                            <li class="header">You have 10 notifications</li>
                            <li>
                                <!-- inner menu: contains the actual data -->
                                <ul class="menu">
                                    <li>
                                        <nuxt-link to="#">
                                            <i class="fa fa-users text-aqua"></i> 5 new members joined today
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="#">
                                            <i class="fa fa-warning text-yellow"></i> Very long description here
                                            that may not fit into the
                                            page and may cause design problems
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="#">
                                            <i class="fa fa-users text-red"></i> 5 new members joined
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="#">
                                            <i class="fa fa-shopping-cart text-green"></i> 25 sales made
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="#">
                                            <i class="fa fa-user text-red"></i> You changed your username
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="footer"><nuxt-link to="#">View all</nuxt-link></li>
                        </ul>
                    </li>
                    <!-- Tasks: style can be found in dropdown.less -->
                    <li class="dropdown tasks-menu">
                        <nuxt-link to="#" class="dropdown-toggle" data-toggle="dropdown">
                            <i class="fa fa-flag-o"></i>
                            <span class="label label-danger">9</span>
                        </nuxt-link>
                        <ul class="dropdown-menu">
                            <li class="header">You have 9 tasks</li>
                            <li>
                                <!-- inner menu: contains the actual data -->
                                <ul class="menu">
                                    <li><!-- Task item -->
                                        <nuxt-link to="#">
                                            <h3>
                                                Design some buttons
                                                <small class="pull-right">20%</small>
                                            </h3>
                                            <div class="progress xs">
                                                <div class="progress-bar progress-bar-aqua" style="width: 20%"
                                                     role="progressbar"
                                                     aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                    <span class="sr-only">20% Complete</span>
                                                </div>
                                            </div>
                                        </nuxt-link>
                                    </li>
                                    <!-- end task item -->
                                    <li><!-- Task item -->
                                        <nuxt-link to="#">
                                            <h3>
                                                Create a nice theme
                                                <small class="pull-right">40%</small>
                                            </h3>
                                            <div class="progress xs">
                                                <div class="progress-bar progress-bar-green" style="width: 40%"
                                                     role="progressbar"
                                                     aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                    <span class="sr-only">40% Complete</span>
                                                </div>
                                            </div>
                                        </nuxt-link>
                                    </li>
                                    <!-- end task item -->
                                    <li><!-- Task item -->
                                        <nuxt-link to="#">
                                            <h3>
                                                Some task I need to do
                                                <small class="pull-right">60%</small>
                                            </h3>
                                            <div class="progress xs">
                                                <div class="progress-bar progress-bar-red" style="width: 60%"
                                                     role="progressbar"
                                                     aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                    <span class="sr-only">60% Complete</span>
                                                </div>
                                            </div>
                                        </nuxt-link>
                                    </li>
                                    <!-- end task item -->
                                    <li><!-- Task item -->
                                        <nuxt-link to="#">
                                            <h3>
                                                Make beautiful transitions
                                                <small class="pull-right">80%</small>
                                            </h3>
                                            <div class="progress xs">
                                                <div class="progress-bar progress-bar-yellow" style="width: 80%"
                                                     role="progressbar"
                                                     aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                                    <span class="sr-only">80% Complete</span>
                                                </div>
                                            </div>
                                        </nuxt-link>
                                    </li>
                                    <!-- end task item -->
                                </ul>
                            </li>
                            <li class="footer">
                                <nuxt-link to="#">View all tasks</nuxt-link>
                            </li>
                        </ul>
                    </li>
                    <!-- User Account: style can be found in dropdown.less -->
                    <li class="dropdown user user-menu">
                        <nuxt-link to="#" class="dropdown-toggle" data-toggle="dropdown">
                            <img src="/dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
                            <span class="hidden-xs">Alexander Pierce</span>
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
                    <!-- Control Sidebar Toggle Button -->
                    <li>
                        <nuxt-link to="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></nuxt-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
