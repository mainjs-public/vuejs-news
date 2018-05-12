<template>
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- Sidebar user panel -->
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="/dashboard/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p>{{authUser && authUser.user && authUser.user.name ? authUser.user.name: 'Admin'}}</p>
                    <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                </div>
            </div>
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu" data-widget="tree">
                <li class="header">MAIN NAVIGATION</li>
                <li :class="{ active: listmenu.submenu, treeview: listmenu.submenu}" v-for="listmenu of menu" v-bind:key="listmenu.id">
                   <nuxt-link :to="listmenu.link">
                       <i :class="`fa ${listmenu.icon}`"/>
                       <span>{{listmenu.name}}</span>
                       <span class="pull-right-container" v-if="listmenu.submenu">
                           <i class="fa fa-angle-left pull-right"></i>
                       </span>
                   </nuxt-link>
                    <ul class="treeview-menu" v-if="listmenu.submenu">
                        <li v-for="submenu of listmenu.submenu" v-bind:key="submenu.id">
                            <nuxt-link :to="submenu.link"><i class="fa fa-circle-o"></i> {{submenu.name}}</nuxt-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
        <!-- /.sidebar -->
    </aside>
</template>
<script>
  const arrayMenu = {
    admin: [
      {
        id: '1',
        name: 'Dashboard',
        icon: 'fa-dashboard',
        link: '/'
      },
      {
        id: '2',
        name: 'Catalog',
        icon: 'fa-reorder',
        link: '/catalog/category',
        submenu: [
          {
            id: '1',
            name: 'Category',
            link: '/catalog/category',
          },
          {
            id: '2',
            name: 'Blog',
            link: '/catalog/blog',
          },
        ]
      },
      {
        id: '3',
        name: 'User',
        icon: 'fa-user',
        link: '/user'
      },
      {
        id: '4',
        name: 'Modules',
        icon: 'fa-cogs',
        link: '/modules/megamenu',
        submenu: [
          {
            id: '1',
            name: 'Megamenu',
            link: '/modules/megamenu',
          },
        ]
      },
      {
        id: '5',
        name: 'Setting',
        icon: 'fa-gear',
        link: '/setting'
      },
      {
        id: '6',
        name: 'Contact',
        icon: 'fa-envelope-o',
        link: '/contact'
      },
    ],
    editor: [
      {
        id: '1',
        name: 'Dashboard',
        icon: 'fa-dashboard',
        link: '/'
      },
      {
        id: '2',
        name: 'Catalog',
        icon: 'fa-reorder',
        link: '/catalog/category',
        submenu: [
          {
            id: '1',
            name: 'Category',
            link: '/catalog/category',
          },
          {
            id: '2',
            name: 'Blog',
            link: '/catalog/blog',
          },
        ]
      },
    ],
    contributor: [
      {
        id: '1',
        name: 'Dashboard',
        icon: 'fa-dashboard',
        link: '/'
      },
      {
        id: '2',
        name: 'Catalog',
        icon: 'fa-reorder',
        link: '/catalog/category',
        submenu: [
          {
            id: '1',
            name: 'Category',
            link: '/catalog/category',
          },
          {
            id: '2',
            name: 'Blog',
            link: '/catalog/blog',
          },
        ]
      },
    ]
  };
  export default {
    computed: {
      authUser () { return this.$store.state.auth },
      menu () {
        const auth = this.$store.state.auth;
        if (auth !== null && auth.user && auth.user.role ) {
          switch(auth.user.role) {
            case 'Admin': return arrayMenu.admin;
            case 'Editor': return arrayMenu.editor;
            case 'Contributor': return arrayMenu.contributor;
          }
        } else {
          return arrayMenu.contributor
        }

      }
    },
  }
</script>
