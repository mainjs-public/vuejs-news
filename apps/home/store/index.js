import orderBy from 'lodash/orderBy';
import { query } from '~/apollo/queries/setting';
import { getBlogLatest } from '~/apollo/queries/blog';

export const state = () => ({
  recentPost: [],
  megamenu: [],
  setting: {},
});

export const mutations = {
  fetchSuccess(state, data) {
    state.recentPost = data.recentPost;
    state.megamenu = data.megamenu;
    state.setting = data.setting;
  },
  fetchError(state) {
    state.recentPost = [];
    state.megamenu = [];
    state.setting = {};
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    try {
      let client = this.app.apolloProvider.defaultClient;

      const dataMegamenu = await client.query({query, variables: { key: 'megamenu' }});
      const dataSetting = await client.query({query, variables: { key: 'setting' }});
      const dataRecentPost = await client.query({query: getBlogLatest, variables: { number: 4 }});

      const objectMegamenu = dataMegamenu.data.settingByKey !== null ? dataMegamenu.data.settingByKey: {json: false, value: []};
      const arrayMegamenu = objectMegamenu.json=== true ? JSON.parse(objectMegamenu.value) : objectMegamenu.value ;
      const megamenu = orderBy(arrayMegamenu, ['order'],['asc']);

      const objectSetting = dataSetting.data.settingByKey !== null ? dataSetting.data.settingByKey: {json: false, value: {}};
      const setting = objectMegamenu.json=== true ? JSON.parse(objectSetting.value) : objectSetting.value ;

      const recentPost = dataRecentPost.data.getBlogLatest || [];

      commit('fetchSuccess', {recentPost: recentPost, setting: setting, megamenu})
    } catch(error) {
      commit('fetchError');
    }
  },
};

