<template>
    <div>
        <form-category status="add" :data="data"/>
    </div>
</template>

<script>
    import FormCategory from '~/components/FormCategory.vue';
    const initData = {
        name: '',
        slug: '',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdYe3FTd_dtcmwRwTZ03rhLACVSDYYTxpRLvm7yP3Rhry0IvD' ,
        description: '',
        content: '',
        status: true,
    };

    export default {
      components: {
        FormCategory,
      },
      data() {
        return {
          data: initData,
        }
      }
    }
</script>
