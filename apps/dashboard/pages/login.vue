<template>
    <div class="login-box">
        <div class="login-logo">
            <nuxt-link to="/"><b>Admin</b></nuxt-link>
        </div>
        <!-- /.login-logo -->
        <div class="login-box-body">
            <p class="login-box-msg">Sign in to start your session</p>

            <form method="post">
                <div class="form-group has-feedback">
                    <input type="email" class="form-control" placeholder="Email">
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" class="form-control" placeholder="Password">
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
                        <nuxt-link to="/" class="btn btn-primary btn-block btn-flat">Sign In</nuxt-link>
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
      }
    }
</script>
