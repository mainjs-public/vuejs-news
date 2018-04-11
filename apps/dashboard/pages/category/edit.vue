<template>
    <div>
        <form-category :data="data" :onClick="onClick"/>
    </div>
</template>

<script>
    import omit from 'lodash/omit';
    import FormCategory from '~/components/FormCategory.vue';
    import { addCategory, getCategory } from '~/apollo/queries/category';
    const initData = {
        name: '',
        slug: '',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdYe3FTd_dtcmwRwTZ03rhLACVSDYYTxpRLvm7yP3Rhry0IvD' ,
        description: '',
        content: '',
        status: true,
    };

    export default {
      asyncData(context, callback) {
        if(context.route.query.id) {
          const id = context.route.query.id ;
          const client = context.app.apolloProvider.defaultClient;
          client.query({ query: getCategory, variables: {categoryId: id} })
            .then((res) => res.data)
            .then(data => {
              const { category } = data;
              callback(null, {data: {
                  clientMutationId: category.id,
                  ...category,
                }});
            }
          );
        } else {
          callback(null, {data: initData});
        }
      },
      components: {
        FormCategory,
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
          const addData = omit(this.data, ['id']);
          this.$apollo.mutate({ mutation: addCategory, variables: { input: addData }});
          e.preventDefault();
        }
      }
    }
</script>
