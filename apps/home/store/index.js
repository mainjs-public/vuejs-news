import orderBy from 'lodash/orderBy';
import { query } from '~/apollo/queries/setting.js';

export const state = () => ({
  categories: [],
  megamenu: []
});

export const mutations = {
  fetchCategorySuccess(state, categories) {
    state.categories = categories;
  },
  fetchMegamenuSuccess(state, megamenu) {
    state.megamenu = megamenu;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let client = this.app.apolloProvider.defaultClient;
    await client.query({
      query,
      variables: { key: 'megamenu' }
    }).then(({ data }) => data.settingByKey)
      .then(({ json, value }) => {
        const megamenu = json ? JSON.parse(value) : value;
        const megamemuOrderByOrder = orderBy(megamenu, ['order'],['asc']);
        commit('fetchMegamenuSuccess', megamemuOrderByOrder)
      });
  },
};

