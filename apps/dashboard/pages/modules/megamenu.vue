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
    middleware: 'authenticated',
    components: {
      MegaMenu
    }
  }
</script>

