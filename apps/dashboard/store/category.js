import { query } from '~/apollo/queries/category.js';

export const state = () => ({
  list: [],
  loading: false,
  error: {},
});

export const mutations = {
  fetchRequest() {
    state.loading = true;
    state.error = {};
  },
  fetchSuccess(state, lists) {
    state.list = lists;
    state.loading = false;
    state.error = {};
  },
  fetchError(state, error) {
    state.loading = false;
    state.error = error;
  }
};

export const actions =  {
  fetch({ commit }) {
    let client = this.app.apolloProvider.defaultClient;
    commit('fetchRequest');
    client.query({ query: query })
      .then((res) => res.data)
      .then(data => {
        commit('fetchSuccess', data.categories);
      })
      .catch(error => commit('fetchError', error));
  }
};

