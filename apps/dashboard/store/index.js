import gql from 'graphql-tag';
export function state () {
  return {
    data: [],
  }
}
export const mutations = {
  setdata(state, data) {
    state.data = data;
  },
};
export const actions =  {
  async nuxtServerInit ({ commit }, context) {
    // const postsQuery = gql`
    //   query {
    //     categories {
    //       id,
    //       name,
    //       created,
    //       image,
    //       updated,
    //       description,
    //       status,
    //       content,
    //     }
    //   }
    // `;
    // let client = context.app.apolloProvider.defaultClient;
    // await client.query({ query: postsQuery })
    //   .then((res) => res.data)
    // .then(data => {
    //   commit('setCategories', data.categories);
    // });

  }
}
