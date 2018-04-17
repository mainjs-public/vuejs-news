<template>
    <div class="login-box">
        <div class="login-logo">
            <nuxt-link to="/"><b>Admin</b></nuxt-link>
        </div>
        <!-- /.login-logo -->
        <div class="login-box-body">
            <p class="login-box-msg">Sign in to start your session</p>
            <div class="alert alert-danger alert-dismissible" style="margin-bottom: 20px" v-if="error !== null && error.message">
                <h4><i class="icon fa fa-ban"></i> Alert!</h4>
                {{error.message}}
            </div>
            <form method="post">
                <div class="form-group has-feedback">
                    <input v-model="email" class="form-control" placeholder="Email">
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" v-model="password" class="form-control" placeholder="Password">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-8">
                        <div class="checkbox icheck">
                            <label>
                                <input type="checkbox"> Remember Me
                            </label>
                        </div>
                    </div>
                    <!-- /.col -->
                    <div class="col-xs-4">
                        <button @click="loginClick($event)" class="btn btn-primary btn-block btn-flat">
                            <i class="fa fa-circle-o-notch fa-spin" v-if="loading"></i>
                            Sign In
                        </button>
                    </div>
                    <!-- /.col -->
                </div>
            </form>

        </div>
        <!-- /.login-box-body -->
        <script>
          $(function () {
            $('input').iCheck({
              checkboxClass: 'icheckbox_square-blue',
              radioClass: 'iradio_square-blue',
              increaseArea: '20%' /* optional */
            });
          });
        </script>
    </div>
</template>
<script>
    import { mapActions} from 'vuex';
    export default {
      layout: 'login',
      head () {
        return {
          title: 'Dashboard: Login',
          bodyAttrs: {
            class: 'hold-transition login-page'
          },
          script: [
            { src: '/bower_components/jquery/dist/jquery.min.js'},
            { src: '/bower_components/jquery-ui/jquery-ui.min.js'},
            { src: '/plugins/iCheck/icheck.min.js'},
          ]
        }
      },
      data() {
        return {
          email: '',
          password: ''
        }
      },
      computed: {
        loading () { return this.$store.state.loading },
        error () { return this.$store.state.error },
      },
      methods: {
        ...mapActions([
          'login'
        ]),
        async loginClick( event) {
          this.login({email: this.email, password: this.password});
          event.preventDefault();
        },
        async logout() {
          try {
            await this.$store.dispatch('logout')
          } catch (e) {
            this.error = e.message
          }
        }
      }
    }
</script>
