<template>
    <div>
        <section class="content-header">
            <h1>
                Setting
            </h1>
            <ol class="breadcrumb">
                <li><nuxt-link to="/"><i class="fa fa-dashboard"></i> Home</nuxt-link></li>
                <li class="active">Setting</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
                                <h3 class="box-title">Setting Form</h3>
                                <button class="btn btn-primary" @click="onClickSave($event)">
                                    <div style="display: flex; flex-direction: row; align-items: center;">
                                        <span>Save</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <!-- /.box-header -->
                        <ul class="navigation_setting">
                           <li v-bind:class="navigation === 'general'? 'navigation_setting_active': ''">
                               <a @click="onChangeNavigation('general')">
                                   General
                               </a>
                           </li>
                           <li v-bind:class="navigation === 'info'? 'navigation_setting_active': ''">
                               <a @click="onChangeNavigation('info')">
                                   Info
                               </a>
                           </li>
                           <li v-bind:class="navigation === 'image'? 'navigation_setting_active': ''">
                               <a @click="onChangeNavigation('image')">
                                   Image
                               </a>
                           </li>
                            <li v-bind:class="navigation === 'contact'? 'navigation_setting_active': ''">
                                <a @click="onChangeNavigation('contact')">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <div class="view_info">
                            <div class="view_form" v-bind:class="navigation === 'general'? 'active':''">
                                <form class="form-horizontal">
                                    <div class="box-body">
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">Meta Title</label>
                                            <div class="col-sm-10">
                                                <input v-model="data.meta_title" type="text" class="form-control" placeholder="Meta Title"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">Meta Tag Description</label>

                                            <div class="col-sm-10">
                                                <textarea style="min-height: 150px" v-model="data.meta_tag_description" type="text" class="form-control" placeholder="Meta Tag Description"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div  class="view_form" v-bind:class="navigation === 'info'? 'active':''">
                                <form class="form-horizontal">
                                    <div class="box-body">
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">Name</label>
                                            <div class="col-sm-10">
                                                <input v-model="data.name" type="text" class="form-control" placeholder="Name"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">Description</label>

                                            <div class="col-sm-10">
                                                <textarea style="min-height: 150px" v-model="data.description" type="text" class="form-control" placeholder="Description"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">Footer</label>
                                            <div class="col-sm-10">
                                                <input v-model="data.footer" type="text" class="form-control" placeholder="Footer"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">Link Facebook</label>
                                            <div class="col-sm-10">
                                                <input v-model="data.link_facebook" type="url" class="form-control" placeholder="Link Facebook"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">Link Gmail</label>
                                            <div class="col-sm-10">
                                                <input v-model="data.link_gmail" type="url" class="form-control" placeholder="Link Gmail"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">Link Twitter</label>
                                            <div class="col-sm-10">
                                                <input v-model="data.link_twitter" type="url" class="form-control" placeholder="Link Twitter"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div  class="view_form" v-bind:class="navigation === 'image'? 'active':''">
                                <form class="form-horizontal">
                                    <div class="box-body">
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">Store logo</label>

                                            <div class="col-sm-10">
                                                <image-manager id="logo" inputName="logo" :value="data.logo" :onChange="logo => this.data.logo = logo" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">Logo Footer</label>

                                            <div class="col-sm-10">
                                                <image-manager id="logo_footer" inputName="logo_footer" :value="data.logo_footer" :onChange="logo_footer => this.data.logo_footer = logo_footer" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">Icon</label>

                                            <div class="col-sm-10">
                                                <image-manager id="icon" inputName="icon" :value="data.icon" :onChange="icon => this.data.icon = icon" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div  class="view_form" v-bind:class="navigation === 'contact'? 'active':''">
                                <form class="form-horizontal">
                                    <div class="box-body">
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">Map</label>
                                            <div class="col-sm-10">
                                                <!--<quill-editor ref="myTextEditor"-->
                                                              <!--v-model="data.map"-->
                                                              <!--:options="editorOption"-->
                                                <!--&gt;-->
                                                <!--</quill-editor>-->
                                                <textarea v-model="data.map" class="form-control" placeholder="Map" style="min-height: 150px"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">Address</label>
                                            <div class="col-sm-10">
                                                <input v-model="data.address" type="text" class="form-control" placeholder="Address"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">Phone</label>

                                            <div class="col-sm-10">
                                                <input v-model="data.phone" type="text" class="form-control" placeholder="Phone"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">Fax</label>
                                            <div class="col-sm-10">
                                                <input v-model="data.fax" type="text" class="form-control" placeholder="Fax"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">Email</label>
                                            <div class="col-sm-10">
                                                <input v-model="data.mail" type="text" class="form-control" placeholder="Mail"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-sm-2 control-label">Contact Location</label>
                                            <div class="col-sm-10">
                                                <textarea v-model="data.contact_location" class="form-control" placeholder="Contact Location" style="min-height: 150px"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import ImageManager from '~/components/ImageManager.vue';
  import { query, updateSetting } from '~/apollo/queries/setting';
  const dataInit = {
    meta_title: '',
    meta_tag_description: '',
    logo: '',
    logo_footer: '',
    icon: '',
    name: '',
    description: '',
    footer: '',
    link_facebook: '',
    link_gmail: '',
    link_twitter: '',
    address: '',
    phone: '',
    fax: '',
    mail: '',
    contact_location: '',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9364273.363926433!2d-12.392661146939734!3d55.03971934808962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited+Kingdom!5e0!3m2!1sen!2sbd!4v1500619264549'
  };

  export default {
    data() {
      return {
        navigation: 'general',
        data: {...dataInit},
        editorOption: {
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'script': 'sub' }, { 'script': 'super' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'direction': 'rtl' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'font': [] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }],
              ['clean'],
              ['link', 'image', 'video']
            ],
            syntax: {
              highlight: text => hljs.highlightAuto(text).value
            }
          }
        }
      }
    },
    computed: {
      editor() {
        return this.$refs.myTextEditor.quill
      },
    },
    created: function () {
      this.$apollo.query({
        query,
        variables: { key: 'setting' }
      }).then(({ data }) => data.settingByKey)
        .then((data) => {
          if (data === null) {
            console.log('run null')
            this.data = {...dataInit};
          } else {
            console.log('run not null')
            const setting = data.json ? JSON.parse(data.value) : data.value;
            this.data = {...dataInit, ...setting};
          }
        });
    },
    methods: {
      onClickSave(e) {
        const input = {
          key: "setting",
          json: true,
          value: JSON.stringify(this.data)
        };
        this.$apollo.mutate({
          mutation: updateSetting,
          variables: { input: input  }
        }).then(({ data }) => {
          console.log(data);
        })
        e.preventDefault();
      },
      onChangeNavigation(nagigation) {
        this.navigation = nagigation
      }
    },
    components: {
      ImageManager
    },
    middleware: 'auth'
  }
</script>

<style>
    .navigation_setting {
        display: flex;
        list-style-type: none;
        padding: 0px;
        margin: 0px 15px;
        border-bottom: 1px solid #ccc;
        position: relative;
        z-index: 1;
    }
    .navigation_setting li {
    }
    .navigation_setting li a {
        padding: 10px 15px;
        color: black;
        display: block;
    }
    .navigation_setting li a:hover {
        background-color: #ccc;
    }
    .navigation_setting_active {
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        border-top: 1px solid #ccc;
        font-weight: bold;
        top: 1px;
        position: relative;
        z-index: 2;
        background-color: white;
    }
    .view_info {

    }
    .view_info .view_form {
        display: none;
    }
    .active {
        display: block !important;
    }
</style>
