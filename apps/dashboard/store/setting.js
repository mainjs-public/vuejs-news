import { updateSetting } from '~/apollo/queries/setting.js';

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
  editSetting(context, input) {
    let client = this.app.apolloProvider.defaultClient;
    context.commit('fetchRequest');
    client.mutate({ mutation: updateSetting, variables: {input : input} })
      .then((res) => {
        return res.data;
      })
      .then(data => {
        context.commit('editSuccess');
        alert("Update success setting");
      })
      .catch(error => context.commit('fetchError', error));
  },
};

