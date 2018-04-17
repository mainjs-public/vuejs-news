import { query } from '~/apollo/queries/category.js';

export const state = () => ({
  categories: [],
});

export const mutations = {
  fetchCategorySuccess(state, categories) {
    state.categories = categories;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let client = this.app.apolloProvider.defaultClient;
    await client.query({query: query})
      .then((res) => {
        return res.data;
      })
      .then(data => {
        commit('fetchCategorySuccess', data.categories);
      })
      .catch(error => {
          alert(`Error category: ${error.message}`)
        }
      );
  },
};

