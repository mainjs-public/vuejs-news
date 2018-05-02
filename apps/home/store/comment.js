import { addComment } from '~/apollo/queries/comment';
import { getBlogBySlug } from '~/apollo/queries/blog';

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
  async addComment(context, data) {
    let client = this.app.apolloProvider.defaultClient;
    context.commit('fetchRequest');
    await client.mutate({ mutation: addComment, variables: {input : data.input}, refetchQueries: [{
        query: getBlogBySlug,
        variables: {slug : data.slug}
      }]})
      .then((res) => {
        return res.data;
      })
      .then(data => {
        context.commit('editSuccess');
      })
      .catch(error => context.commit('fetchError', error));
  },
};

