import { editPage, deletePage, queryPagination } from '~/apollo/queries/page';

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
  editPage(context, data) {
    let client = this.app.apolloProvider.defaultClient;
    context.commit('fetchRequest');
    client.mutate({ mutation: editPage, variables: {input : data} })
      .then((res) => {
        return res.data;
      })
      .then(data => {
        context.commit('editSuccess');
        this.app.context.redirect('/catalog/page');
      })
      .catch(error => context.commit('fetchError', error));
  },
  deletePage({ commit }, value) {
    let client = this.app.apolloProvider.defaultClient;
    client.mutate({
      mutation: deletePage,
      variables: {input : { pageId : value.id}} ,
      refetchQueries: [{
        query: queryPagination,
        variables: {start : value.start, length: value.length} ,
      }]
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

