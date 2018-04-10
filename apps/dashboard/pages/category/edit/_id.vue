<template>
    <div>
       <!--<form-category status="edit" />-->
        edit
    </div>
</template>

<script>
    import FormCategory from '~/components/FormCategory.vue';
    // const postQuery = gql`
    //   query CategoryQuery($id: ID) {
    //     category(id: $id) {
    //       id,
    //       name,
    //       created,
    //       image,
    //       updated,
    //       description,
    //       status,
    //       content,
    //     }
    //   }
    // `;
    export default {
      components: {
        FormCategory,
      },
      // apollo: {
      //   add: {
      //     query: addCategory,
      //     variables () {
      //       return {
      //         data: this.data
      //       }
      //     }
      //   }
      // },
    }
</script>
