<template>
  <div>
    <!--Header area end here-->
    <!-- Inner Page Header serction start here -->
    <div class="inner-page-header">
      <div class="banner">
        <img src="images/banner/3.jpg" alt="Banner">
      </div>
      <div class="banner-text">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="header-page-locator">
                <ul>
                  <li><a href="index.html">Home <i class="fa fa-compress" aria-hidden="true"></i> </a> Account</li>
                </ul>
              </div>
              <div class="header-page-title">
                <h1>Account</h1>
              </div>
              <div class="header-page-subtitle">
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  <br>alteration in some form, by injected humou</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Inner Page Header serction end here -->

    <!-- Blog Page Start Here -->
    <div class="account-page-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="border">
              <form>
                <fieldset>
                  <div class="row">
                    <h3>Login</h3>
                    <div class="form-group">
                      <label>Username or email address *</label>
                      <input class="form-control" required="" type="text">
                    </div>
                    <div class="form-group">
                      <label>Password *</label>
                      <input class="form-control" required="" type="pass">
                    </div>
                    <div class="form-group btn-register">
                      <span class="lost-pass">Lost your password?</span>
                      <button class="btn-send" type="submit">Login</button>
                      <span class="checkbox">
                        <label>
                          <input type="checkbox" value="">
                          <span class="cr"><i class="fa cr-icon fa-check" aria-hidden="true"></i></span>Remember Me
                        </label>
                      </span>
                      <span class="login">Or you can login with</span>
                      <ul class="share-link">
                        <li class="facebook"><a href="#"> <i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a>
                        </li>
                        <li class="twitter"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
                        </li>
                        <li class="google"><a href="#"><i class="fa fa-google" aria-hidden="true"></i> Google</a></li>
                      </ul>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div class="border register">
              <form>
                <fieldset>
                  <div class="row">
                    <h3>Register</h3>
                    <div class="form-group">
                      <label>Email address *</label>
                      <input class="form-control" required="" type="text">
                    </div>
                    <div class="form-group">
                      <label>Password *</label>
                      <input class="form-control" required="" type="pass">
                    </div>
                    <div class="form-group">
                      <label>Confirm Password</label>
                      <input class="form-control" required="" type="confirm-pass">
                    </div>
                    <div class="form-group btn-register">
                      <button class="btn-send" type="submit">Register</button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'account'
  }
</script>

<style scoped>

</style>
