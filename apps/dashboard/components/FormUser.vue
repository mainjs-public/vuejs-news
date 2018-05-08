<template>
    <div>
        <section class="content-header">
            <h1>
                {{ data.id ? "Edit" : "Add"}}
            </h1>
            <ol class="breadcrumb">
                <li><a href="/"><i class="fa fa-dashboard"></i> Home</a></li>
                <li><a href="/user">User</a></li>
                <li class="active">{{data.id ? "Edit" : "Add"}}</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div>
                            <div class="box-header with-border">
                                <h3 class="box-title">{{data.id ? "Edit user" : "Add user"}}</h3>
                                <div class="pull-right">
                                    <nuxt-link class="btn btn-default" style="margin-right: 10px" to="/user">Back</nuxt-link>
                                    <button type="submit" class="btn btn-info" @click="onClick($event)">
                                        <i class="fa fa-circle-o-notch fa-spin" v-if="loading"></i>
                                        Save
                                    </button>
                                </div>
                            </div>
                            <!-- /.box-header -->
                            <div class="alert alert-danger alert-dismissible" style="margin: 0px 10px" v-if="error.message">
                                <h4><i class="icon fa fa-ban"></i> Alert!</h4>
                                {{error.message}}
                            </div>
                            <!-- form start -->
                            <form class="form-horizontal">
                                <div class="box-body">
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Name</label>

                                        <div class="col-sm-10">
                                            <input v-model="data.name" type="text" class="form-control" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Email</label>

                                        <div class="col-sm-10">
                                            <input v-model="data.email" type="text" class="form-control" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Password</label>

                                        <div class="col-sm-10">
                                            <input v-model="data.password" type="password" class="form-control" placeholder="Password"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Confirm password</label>

                                        <div class="col-sm-10">
                                            <input v-model="data.confirm_password" type="password" class="form-control" placeholder="Confirm password"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Role</label>

                                        <div class="col-sm-10">
                                            <select class="form-control" v-model="data.role">
                                                <option value="Admin">Admin</option>
                                                <option value="Editer">Editer</option>
                                                <option value="Contributor">Contributor</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  export default {
    props: ['data', 'onClick'],
    computed: {
      loading () { return this.$store.state.user.loading },
      error () { return this.$store.state.user.error }
    },
    components: {
    },
    methods: {
      changeStatus(value){
        this.data.status = value;
      }
    }
  }
</script>
