import { query, addBlog  } from '~/apollo/queries/blog.js';

export const state = () => ({
  list: [],
  loading: false,
  error: {},
});

export const mutations = {
  fetchRequest(state) {
    state.loading = true;
    state.error = {};
  },
  addSuccess(state) {
    state.loading = false;
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
      .then((res) => {
      console.log(res);
    return res.data;
  })
  .then(data => {
      console.log(data);
    commit('fetchSuccess', data.categories);
  })
  .catch(error => commit('fetchError', error));
  },
  addBlog({ commit }, data) {
    let client = this.app.apolloProvider.defaultClient;
    commit('fetchRequest');
    client.mutate({ mutation: addBlog, variables: {input : data} })
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .then(data => {
        console.log(data);
        commit('addSuccess');
      })
      .catch(error => commit('fetchError', error));
  }
};

