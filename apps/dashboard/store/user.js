export const state = () => ({
  user: null,
  token: null,
})

export const mutations = {
  SET_USER: function (state, user, token) {
    state.user = user;
    state.token = token;
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    // if (req.session && req.session.user) {
    //   commit('SET_USER', req.session.user)
    // }
    console.log('req user', req)
  },
  // async login({ commit }, { username, password }) {
  //   try {
  //     const { data } = await axios.post('/api/login', { username, password })
  //     commit('SET_USER', data)
  //   } catch (error) {
  //     if (error.response && error.response.status === 401) {
  //       throw new Error('Bad credentials')
  //     }
  //     throw error
  //   }
  // },
  //
  // async logout({ commit }) {
  //   await axios.post('/api/logout')
  //   commit('SET_USER', null)
  // }
}
