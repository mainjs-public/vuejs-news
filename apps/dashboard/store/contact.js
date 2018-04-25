import { query, editContact, queryPagination, deleteContact, countUnReadContactQuery  } from '~/apollo/queries/contact.js';

export const state = () => ({
  loading: false,
  error: {},
});

export const mutations = {
  fetchRequest(state) {
    state.loading = true;
    state.error = {};
  },
  editSuccess(state) {
    state.loading = false;
  },
  deleteSuccess(state) {
    state.loading = false;
  },
  fetchError(state, error) {
    state.loading = false;
    state.error = error;
  }
};

export const actions =  {
  async readContact(context, value) {
    if (value.read === true) {
      this.app.context.redirect(`/contact/view?id=${value.id}`);
    } else {
      let client = this.app.apolloProvider.defaultClient;
      context.commit('fetchRequest');
      await client.mutate({ mutation: editContact, variables: {input : {...value, read: true}}, refetchQueries: [{
          query: query,
        },{query: countUnReadContactQuery}] })
        .then((res) => {
          return res.data;
        })
        .then(data => {
          context.commit('editSuccess');
          console.log('test data read contact', data);
          this.app.context.redirect(`/contact/view?id=${data.mutationContact.id}`);
        })
        .catch(error => context.commit('fetchError', error));
    }
  },
  deleteContact({ commit }, value) {
    let client = this.app.apolloProvider.defaultClient;
    commit('fetchRequest');
    client.mutate({
      mutation: deleteContact,
      variables: {input : { contactId: value.id}} ,
      refetchQueries: [
        {
          query: queryPagination,
          variables: {start : value.start, length: value.length} ,
        },
        {
          query: countUnReadContactQuery
        }
      ]
    })
      .then((res) => {
        return res.data;
      })
      .then(data => {
        commit('deleteSuccess');
      })
      .catch(error => {
        commit('fetchError', error);
        alert(error.message);
      });
  }
};

