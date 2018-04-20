<template>
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- Sidebar user panel -->
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p>{{authUser !== null ? authUser.user.name: 'Admin'}}</p>
                    <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                </div>
            </div>
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu" data-widget="tree">
                <li class="header">MAIN NAVIGATION</li>
                <li><nuxt-link to="/"><i class="fa fa-dashboard"></i> <span>Dashboard</span></nuxt-link></li>
                <li class="active treeview">
                    <nuxt-link to="#">
                        <i class="fa fa-dashboard"></i>
                        <span>Catalog</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </nuxt-link>
                    <ul class="treeview-menu">
                        <li><nuxt-link to="/category"><i class="fa fa-circle-o"></i> Category</nuxt-link></li>
                        <li><nuxt-link to="/blog"><i class="fa fa-circle-o"></i> Blog</nuxt-link></li>
                    </ul>
                </li>
                <li><nuxt-link to="/setting"><i class="fa fa-dashboard"></i> <span>Setting</span></nuxt-link></li>
                <li><nuxt-link to="/megamenu"><i class="fa fa-dashboard"></i> <span>MegaMenu</span></nuxt-link></li>
                <li><nuxt-link to="/login"><i class="fa fa-dashboard"></i> <span>Login</span></nuxt-link></li>
            </ul>
        </section>
        <!-- /.sidebar -->
    </aside>
</template>
<script>
  export default {
    computed: {
      authUser () { return this.$store.state.authUser },
    },
  }
</script>
