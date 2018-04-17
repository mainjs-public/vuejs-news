import axios from 'axios'
import { signInMutate } from '~/apollo/queries/user';

export const state = () => ({
  authUser: null,
  error: null,
  loading: false,
})

export const mutations = {
  request_login(state) {
    state.loading = true;
    state.error = null;
    state.authUser = null;
  },
  SET_USER(state, user) {
    state.authUser = user;
    state.loading = false;
  },
  error_login(state, error) {
    state.loading = false;
    state.error = error;
  },
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    console.log('test req user', req.session)
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login({ commit }, { email, password }) {
    let client = this.app.apolloProvider.defaultClient;
    commit('request_login');
    client.mutate({ mutation: signInMutate, variables: { email : email, password: password } })
      .then((res) => {
        return res.data;
      })
      .then(data => {
        commit('SET_USER', data);
        this.app.context.redirect('/');
      })
      .catch(error => commit('error_login', error));
  },

  async logout({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
  }

}
