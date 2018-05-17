import omit from 'lodash/omit';
import { query, addUserMutate, updateUserMutate, deleteUserMutate} from '~/apollo/queries/user';

const checkPassword = function(data) {
  if (!data) return false;
  if (data.id) {
    return ((typeof data.password === 'string' && data.password.trim().length >=6 && data.password === data.confirm_password) || (data.password === undefined && (data.confirm_password === '' || data.confirm_password === data.password ))) ? true : false;
  } else {
    return (typeof data.password === 'string' && data.password.trim().length >=6 && data.password === data.confirm_password) ? true : false;
  }
};

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
  deleteSuccess(state) {
    state.loading = false;
  },
  fetchError(state, error) {
    state.loading = false;
    state.error = error;
  }
};

export const actions =  {
  addUser(context, data) {
    let client = this.app.apolloProvider.defaultClient;
    context.commit('fetchRequest');
    client.mutate({ mutation: addUserMutate, variables: {...data}, refetchQueries: [{
        query: query
      }]
    })
      .then((res) => {
        return res.data;
      })
      .then(data => {
        context.commit('editSuccess');
        this.app.context.redirect('/user');
      })
      .catch(error => context.commit('fetchError', error));
  },
  editUser(context, data) {
    let client = this.app.apolloProvider.defaultClient;
    context.commit('fetchRequest');
    const mutation = data.id ? updateUserMutate: addUserMutate;
    const checkPasswordValue = checkPassword(data);
    if (checkPasswordValue) {
      const variables = omit(data, ['id','confirm_password']);
      client.mutate({ mutation: mutation, variables: {...variables}, refetchQueries: [{
          query: query
        }]
      })
        .then((res) => {
          return res.data;
        })
        .then(data => {
          context.commit('editSuccess');
          this.app.context.redirect('/user');
        })
        .catch(error => context.commit('fetchError', error));
    } else {
      context.commit('fetchError', {message: 'Fail of Password and Confirm Password'})
    }
  },
  deleteUser({ commit }, id) {
    let client = this.app.apolloProvider.defaultClient;
    commit('fetchRequest');
    client.mutate({
      mutation: deleteUserMutate,
      variables: {input : { userId : id}} ,
      refetchQueries: [{
        query: query,
      }]
    })
      .then((res) => {
        return res.data;
      })
      .then(data => {
        commit('deleteSuccess');
      })
      .catch(error => {
        commit('fetchError', error);
        alert(error.message);
      });
  }
};

