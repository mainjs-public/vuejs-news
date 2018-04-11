<template>
    <div>
        <form-category :data="data" :onClick="onClick"/>
    </div>
</template>

<script>
    import FormCategory from '~/components/FormCategory.vue';
    import { addCategory } from '~/query/category';
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
      },
      methods: {
        onSuccess: function () {
          const error = {}
          const data = this.data;
          if (data.name === '') {
            error.name = 'Field Name emtpy';
          }
          if (data.slug === '') {
            error.slug = 'Field Name slug';
          }
          if (data.image === '') {
            error.image = 'Please choice Image';
          }
          if (data.description === '') {
            error.description = 'Field Description emtpy';
          }
          if (data.content === '') {
            error.name = 'Field Content emtpy';
          }
          this.error = error;
          if ( error === {}) {
            console.log('tes onsuccess');
            if (this.status === 'add') {
              // const client = this.$apollo.getClient()
              // this.$apollo.mutate({mutation: addCategory, variables: {input : this.data}});
            };
          };
        },
        onClick(e) {
          // receive the associated Apollo client 
          // const client = this.$apollo.getClient();
          // most likely you would call mutations like following:
          this.$apollo.mutate({ mutation: addCategory, variables: { input: this.data }});
          e.preventDefault();
        }
      }
    }
</script>
