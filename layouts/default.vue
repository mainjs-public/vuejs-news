<template>
  <div>
    <layout-heading/>
    <nuxt/>
    <layout-footer/>
  </div>
</template>
<script>
  import LayoutHeading from '~/components/LayoutHeading.vue';
  import LayoutFooter from '~/components/LayoutFooter.vue';
  export default {
    components: {
      LayoutFooter,
      LayoutHeading,
    }
  }
</script>
