import { query, addContact } from '~/apollo/queries/contact.js';

export const state = () => ({
  loading: false,
  error: {},
  success: false,
});

export const mutations = {
  fetchRequest(state) {
    state.loading = true;
    state.error = {};
    state.success = false;
  },
  editSuccess(state) {
    state.loading = false;
    state.success = true;
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

