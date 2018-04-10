<template>
    <div>
        <section class="content-header">
            <h1>
                {{info.title}}
                <!--<small>advanced tables</small>-->
            </h1>
            <ol class="breadcrumb">
                <li><a href="/"><i class="fa fa-dashboard"></i> Home</a></li>
                <li><a href="/category">Category</a></li>
                <li class="active">{{info.title}}</li>
            </ol>
        </section>
        {{data}}
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div>
                            <div class="box-header with-border">
                                <h3 class="box-title">{{info.form_title}}</h3>
                            </div>
                            <!-- /.box-header -->
                            <!-- form start -->
                            <form class="form-horizontal">
                                <div class="box-body">
                                    <div class="form-group" v-bind:class="{ 'has-error': error.name ? true : false }">
                                        <label class="col-sm-1 control-label">Name</label>

                                        <div class="col-sm-11">
                                            <input v-model="data.name" type="text" class="form-control" placeholder="Name"/>
                                            <label class="help-block" v-if="error.name">{{error.name}}</label>
                                        </div>
                                    </div>
                                    <div class="form-group" v-bind:class="{ 'has-error': error.slug ? true : false }">
                                        <label class="col-sm-1 control-label">Slug</label>

                                        <div class="col-sm-11">
                                            <input v-model="data.slug" type="text" class="form-control" placeholder="Slug"/>
                                            <label class="help-block" v-if="error.slug">{{error.slug}}</label>
                                        </div>
                                    </div>
                                    <!--<div class="form-group" v-bind:class="{ 'has-error': error.image ? true : false }">-->
                                        <!--<label class="col-sm-1 control-label">Image</label>-->

                                        <!--<div class="col-sm-11">-->
                                            <!--<input type="file" @change="processFile($event)"/>-->
                                            <!--<img :src="data.image" v-if="data.image !== ''"/>-->
                                            <!--<label class="help-block" v-if="error.image">{{error.image}}</label>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                    <div class="form-group" v-bind:class="{ 'has-error': error.description ? true : false }">
                                        <label class="col-sm-1 control-label">Description</label>

                                        <div class="col-sm-11">
                                            <input v-model="data.description" type="text" class="form-control" placeholder="Description">
                                            <label class="help-block" v-if="error.description">{{error.description}}</label>
                                        </div>
                                    </div>
                                    <div class="form-group" v-bind:class="{ 'has-error': error.content ? true : false }">
                                        <label class="col-sm-1 control-label">Content</label>

                                        <div class="col-sm-11">
                                            <input v-model="data.content" type="text" class="form-control" placeholder="Content">
                                            <label class="help-block" v-if="error.content">{{error.content}}</label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">Status</label>

                                        <div class="col-sm-11">
                                            <select class="form-control" :value="data.status.toString()" @change="changeSelect($event)">
                                                <option value="true">True</option>
                                                <option value="false">False</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <!-- /.box-body -->
                                <div class="box-footer">
                                    <button type="submit" class="btn btn-default">Cancel</button>
                                    <button type="submit" class="btn btn-info pull-right" @click="onSuccess">Ok</button>
                                </div>
                                <!-- /.box-footer -->
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import { addCategory } from '~/query/category.js'
  export default {
    props: ['data', 'status'],
    data() {
      return {
        info: {
            title: this.status === 'edit' ? 'Edit category' : 'Add category',
            form_title: this.status === 'edit' ? 'Form edit category' : 'Form add category',
            button: 'Edit',
        },
        error: {},
      };
    },
    methods: {
      processFile: function (event) {
        this.data.image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdYe3FTd_dtcmwRwTZ03rhLACVSDYYTxpRLvm7yP3Rhry0IvD';
      },
      changeSelect: function (event) {
        this.data.status = event.target.value === 'true' ? true : false;
      },
      onSuccess: function () {
        const error = {}
        const data = this.data;
        if (data.name === '') {
          error.name = 'Field Name emtpy';
        }
        if (data.slug === '') {
          error.slug = 'Field Name slug';
        }
        if (data.image === '') {
          error.image = 'Please choice Image';
        }
        if (data.description === '') {
          error.description = 'Field Description emtpy';
        }
        if (data.content === '') {
          error.name = 'Field Content emtpy';
        }
        this.error = error;
        if ( error === {}) {
          console.log('tes onsuccess');
          if (this.status === 'add') {
            // const client = this.$apollo.getClient()
            this.$apollo.mutate({mutation: addCategory, variables: this.data});
          };
        };
      },
    }
  }
</script>
