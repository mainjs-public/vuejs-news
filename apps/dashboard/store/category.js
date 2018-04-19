import {query, editCategory, deleteCategory} from '~/apollo/queries/category.js';

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
  fetchSuccess(state, lists) {
    state.list = lists;
    state.loading = false;
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

export const actions = {
  fetch({commit}) {
    let client = this.app.apolloProvider.defaultClient;
    commit('fetchRequest');
    client.query({query: query})
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
  editCategory(context, data) {
    let client = this.app.apolloProvider.defaultClient;
    context.commit('fetchRequest');
    client.mutate({ mutation: editCategory, variables: {input : data} })
      .then((res) => {
        return res.data;
      })
      .then(data => {
        context.commit('editSuccess');
        this.app.context.redirect('/category');
      })
      .catch(error => context.commit('fetchError', error));
  },
  deleteCategory({commit}, id) {
    let client = this.app.apolloProvider.defaultClient;
    commit('fetchRequest');
    client.mutate({
      mutation: deleteCategory,
      variables: {input: {categoryId: id}},
      refetchQueries: [{
        query: query,
      }]
    })
      .then((res) => {
        return res.data;
      })
      .then(data => {
        commit('deleteSuccess');
      })
      .catch(error => commit('fetchError', error));
  }
};

