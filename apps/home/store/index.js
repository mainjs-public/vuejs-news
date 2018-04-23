import orderBy from 'lodash/orderBy';
import { query } from '~/apollo/queries/setting.js';

export const state = () => ({
  categories: [],
  megamenu: [],
  setting: {},
});

export const mutations = {
  fetchCategorySuccess(state, categories) {
    state.categories = categories;
  },
  fetchMegamenuSuccess(state, megamenu) {
    state.megamenu = megamenu;
  },
  fetchSettingSuccess(state, setting) {
    state.setting = setting;
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
    await client.query({
      query,
      variables: { key: 'setting' }
    }).then(({ data }) => data.settingByKey)
      .then((data) => {
        if (data === null) {
          console.log('not get setting');
        } else {
          const { value, json } = data;
          const setting = json ? JSON.parse(value) : value;
          commit('fetchSettingSuccess', setting)
        }

      });
  },
};

