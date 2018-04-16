<template>
    <div class="wap-megamenu">

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body app-heading">
                        <div class="app-title">
                            <div class="title"><span
                                    class="highlight text-uppercase pull-left">{{ headingTitle }}</span></div>
                            <button type="button" class="btn btn-success pull-right btn-save" @click="saveMenu">Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <br><br>

        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row megamenu-row">
                            <div class="col-xs-12">
                                <ul class="megamenu list-inline">
                                    <li v-for="menu in megamenu">
                                        <a href="#" @click.prevent="" @click.prevent="setActive(menu)">
                                            {{ menu.title || 'Empty Item' }}
                                        </a>
                                        <ul class="megamenu-sub list-unstyled" v-if="active == menu.id">
                                            <li v-for="submenu in menu.children">
                                                <a @click.prevent="setActiveSub(submenu)"
                                                   href="#">{{ submenu.title || 'Empty Item' }}</a>
                                            </li>
                                            <li>
                                                <input class="megamenu-input"
                                                       placeholder="New menu item"
                                                       type="text"
                                                       @keyup.enter.prevent="addMenuItem(menu.id, $event)"
                                                       @blur="addMenuItem(menu.id, $event)">
                                            </li>
                                        </ul>
                                    </li>

                                    <li><a href="#" @click.prevent="" class="text-success">
                                        <input class="megamenu-input"
                                               placeholder="New menu item"
                                               type="text"
                                               @keyup.enter.prevent="addMenu"
                                               @blur="addMenu">
                                    </a></li>
                                </ul>
                            </div>
                            <div class="col-xs-12">

                                <div class="panel panel-default properties pull-right" v-if="activeItem != ''">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">Properties</h3>
                                    </div>
                                    <div class="panel-body">

                                        <div class="form-group">
                                            <label for="type">Name</label>
                                            <input type="text" v-model="activeItem.title" class="form-control" id="type"
                                                   placeholder="Type">
                                        </div>

                                        <div class="form-group">
                                            <label for="type">Type</label>
                                            <select @change="changType" v-model="activeItem.type" id="type"
                                                    class="form-control">
                                                <option v-for="option in options" :value="option.value">
                                                    {{ option.text }}
                                                </option>
                                            </select>
                                        </div>

                                        <div class="form-group" v-if="menuCustom">
                                            <label for="link">Link</label>
                                            <input type="text" v-model="activeItem.data" class="form-control" id="link"
                                                   placeholder="Type">
                                        </div>

                                        <div class="form-group" v-if="menuType">
                                            <label for="title">Type</label>
                                            <select v-model="activeItem.data" id="input" class="form-control">
                                                <option v-for="option in optiontyle" :value="option.id">
                                                    {{ option.text }}
                                                </option>
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <label for="order">Sort Order</label>
                                            <input type="number" v-model="activeItem.order" id="order"
                                                   class="form-control" placeholder="Sort Order">
                                        </div>

                                        <button class="btn btn-danger btn-xs" @click="deleteMenu">Delete</button>
                                        <button class="btn btn-success btn-xs pull-right" @click="saveMenu">Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

  module.exports = {
    data: function () {
      return {
        active: -1,
        activeItem: '',
        megamenu: [],
        optiontyle: [],
        options: [
          {text: 'Custom', value: 'custom'},
          {text: 'About Us', value: 'about'},
          {text: 'Contact Us', value: 'contact'},
          {text: 'Gallery', value: 'gallery'},
          {text: 'Tour', value: 'tours'},
          {text: 'Cabin', value: 'cabins'},
          {text: 'Blog', value: 'blogs'},
          {text: 'Verified Reviews', value: 'reviews'},
        ]
      }
    },

    watch: {
      megamenu: function () {
        this.postData();
        // this.preMenu();
      },

      activeItem: function () {
        // this.preMenu();
      }
    },

    props: ['action', 'headingTitle'],

    computed: {

      menuType: function () {
        return this.activeItem.type == "tours" || this.activeItem.type == "cabins" || this.activeItem.type == "blogs";
      },

      menuCustom: function () {
        return this.activeItem.type == "custom";
      }
    },

    created: function () {
      axios.get(this.action)
        .then(function (response) {
          this.megamenu = response.data;
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
    },

    methods: {

      setActive: function (menu) {
        this.active = menu.id;
        this.activeItem = menu;
        this.changType();
      },

      setActiveSub: function (menu) {
        this.activeItem = menu;
        this.changType();
      },

      addMenuItem: function (id, e) {
        var title = e.target.value;

        if (title == "") return;

        this.megamenu = this.megamenu.map(function (menu) {

          if (menu.id == id) {

            menu.children.push({
              id: +new Date,
              title: title,
              data: '',
              type: 'custom',
            });

          }

          return menu;
        });

        e.target.value = "";

      },

      addMenu: function (e) {

        var title = e.target.value;

        if (title == "") return;

        this.megamenu.push({
          id: +new Date,
          title: title,
          data: '',
          type: 'custom',
          children: []
        })

        e.target.value = "";
      },

      deleteMenu: function () {

        if (!confirm('Are you sure delete menu?')) return;

        if (this.active == this.activeItem.id) {

          this.megamenu = this.megamenu.filter(function (menu) {

            return this.active != menu.id;

          }.bind(this));

          this.active = -1;
        } else {

          this.megamenu = this.megamenu.map(function (menu) {

            if (this.active == menu.id) {
              menu.children = menu.children.filter(function (item) {
                return this.activeItem.id != item.id;
              }.bind(this));
            }

            return menu;

          }.bind(this));


        }

        this.activeItem = '';
      },

      saveMenu: function () {
        this.preMenu();
        this.postData();
      },

      postData: function () {
        axios.post(this.action, {
          megamenu: this.megamenu
        })
          .then(function (response) {
            console.log(response.data);
          }.bind(this))
          .catch(function (error) {
            console.log(error);
          });
      },

      changType: function () {

        if (this.menuType) {
          axios.post('/dashboard/megamenu', {
            type: this.activeItem.type
          })
            .then(function (response) {
              this.optiontyle = response.data;
            }.bind(this))
            .catch(function (error) {
              console.log(error);
            });
        }
        ;
      },

      preMenu: function () {

        this.megamenu = this.megamenu.map((menu) => {
          menu.order = isNaN(menu.order) ? 0 : parseInt(menu.order);

          if (menu.children.length) {

            let children = menu.children.map((subMenu) => {
              subMenu.order = isNaN(subMenu.order) ? 0 : parseInt(subMenu.order);
              return subMenu;
            });

            menu.children = _.orderBy(children, 'order', 'asc');

          }

          return menu;
        });

        this.megamenu = _.orderBy(this.megamenu, 'order', 'asc');
      }
    }
  }
</script>

<style lang="sass">
    .wap-megamenu
        margin: 30px
        .megamenu-row
            min-height: 500px
        .megamenu
            a
                line-height: 20px
            > li
                padding: 10px 15px
                border: 1px solid #e7edee
                position: relative
                + li
                    margin-left: 5px
        .megamenu-sub
            min-width: 200px
            padding: 10px 15px
            border: 1px solid #e7edee
            position: absolute
            left: 0
            top: 100%
            margin-top: 10px
            z-index: 9
            > li
                padding: 10px 15px
                border: 1px solid #e7edee
                + li
                    margin-top: 5px
        .megamenu-input
            border: 1px solid transparent
            &:active, &:focus
                border: 1px solid #dfe6e8
        .properties
            .form-control
                border-radius: 0
                padding: 5px 10px
                margin-bottom: 15px

</style>














