<template>
    <div>
        <layout-heading/>
        <layout-menu/>
        <div class="content-wrapper">
            <nuxt/>
        </div>
        <layout-footer/>
    </div>
</template>

<script>
  import LayoutHeading from '~/components/LayoutHeading.vue';
  import LayoutFooter from '~/components/LayoutFooter.vue';
  import LayoutMenu from '~/components/LayoutMenu.vue';
  export default {
    components: {
      LayoutHeading,
      LayoutFooter,
      LayoutMenu,
    }
  }
</script>
