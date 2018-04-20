<template>
    <div>
        <section class="content-header">
            <h1>
                MegaMenu
            </h1>
            <ol class="breadcrumb">
                <li>
                    <nuxt-link to="/"><i class="fa fa-dashboard"></i> Home</nuxt-link>
                </li>
                <li class="active">MegaMenu</li>
            </ol>
        </section>
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <div style="display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
                                <h3 class="box-title">Category List</h3>
                            </div>
                        </div>
                        <div class="box-body">
                            <mega-menu/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import MegaMenu from '~/components/MegaMenu.vue';

  export default {
    name: 'megamenu',
    middleware: 'auth',
    components: {
      MegaMenu
    }
  }
</script>

