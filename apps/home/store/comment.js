import trim from 'lodash/trim';
import validator from 'validator'
import { addComment, queryPaginationByIdBlog } from '~/apollo/queries/comment';

const checkData = (data) => {
   let error = null;
   if (!data || typeof data.comment !== 'string' || trim(data.comment).length < 100) {
     error = {
       message: 'Comment must > 100.'
     }
   }
   if (!data || typeof data.email !== 'string' || data.email.trim().length === 0 || !validator.isEmail(data.email)) {
     error = {
       message: 'Email fail'
     }
   }
   return error;
}

export const state = () => ({
  success: false,
  loading: false,
  error: {},
});

export const mutations = {
  fetchRequest(state) {
    state.loading = true;
    state.success = false;
    state.error = {};
  },
  editSuccess(state) {
    state.loading = false;
    state.success = true;
  },
  fetchError(state, error) {
    state.loading = false;
    state.error = error;
  }
};

export const actions =  {
  async addComment(context, data) {
    const error = checkData(data.input);
    if (error) {
      context.commit('fetchError', error)
    } else {
      let client = this.app.apolloProvider.defaultClient;
      context.commit('fetchRequest');
      await client.mutate({ mutation: addComment, variables: {input : data.input}, refetchQueries: [{
          query: queryPaginationByIdBlog,
          variables: {blog_id : data.input.blog_id, start: data.start, length: data.length}
        }]})
        .then((res) => {
          return res.data;
        })
        .then(data => {
          context.commit('editSuccess');
        })
        .catch(err => context.commit('fetchError', err));
    }
  },
};

