<template>
  <div>
    <layout-heading/>
    <nuxt/>
    <layout-footer/>
  </div>
</template>
<script>
  import LayoutFooter from '~/components/LayoutFooter.vue';
  import LayoutHeading from '~/components/LayoutHeading.vue';
  export default {
    components: {
      LayoutHeading,
      LayoutFooter,
    }
  }
</script>
