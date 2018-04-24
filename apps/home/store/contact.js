import { query, addContact } from '~/apollo/queries/contact.js';

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
  fetchError(state, error) {
    state.loading = false;
    state.error = error;
  }
};

export const actions =  {
  async addContact(context, data) {
    let client = this.app.apolloProvider.defaultClient;
    context.commit('fetchRequest');
    await client.mutate({ mutation: addContact, variables: {input : data}, refetchQueries: [{
        query: query,
      }] })
      .then((res) => {
        return res.data;
      })
      .then(data => {
        context.commit('editSuccess');
      })
      .catch(error => context.commit('fetchError', error));
  },
};

