import axios from 'axios'
import { signInMutate } from '~/apollo/queries/user';
import { addCookie } from '~/utils/auth'

import Cookie from 'js-cookie'
import cookieparser from 'cookieparser'

export const state = () => ({
    auth: null,
    error: null,
    loading: false,
})

export const mutations = {
    LOGIN_REQUEST(state) {
        state.loading = true;
        state.error = null;
        state.auth = null;
    },
    LOGIN_SUCCESS(state, auth) {
        state.auth = auth;
        state.loading = false;
        state.error = null;
    },
    LOGIN_ERROR(state, error) {
        state.loading = false;
        state.auth = null;
        state.error = error;
    },
}

export const actions = {
    nuxtServerInit({ commit }, { req }) {
        let auth = null;
        if (req.headers.cookie) {
            var parsed = cookieparser.parse(req.headers.cookie);
            auth = JSON.parse(parsed.auth);
        }
        commit('LOGIN_SUCCESS', auth);
    },
    login({ commit }, { email, password }) {
        let client = this.app.apolloProvider.defaultClient;
        commit('LOGIN_REQUEST');
        client.mutate({
                mutation: signInMutate,
                variables: {
                    email: email,
                    password: password
                }
            })
            .then((res) => {
                return res.data;
            })
            .then(data => {
                const auth = data.signIn;
                commit('LOGIN_SUCCESS', auth); // mutating to store for client rendering
                Cookie.set('auth', auth); // saving token in cookie for server rendering
                this.app.context.redirect('/');
            })
            .catch(error => commit('LOGIN_ERROR', error));
    },
    logout({ commit }) {
        commit('LOGIN_SUCCESS', null);
        Cookie.set('auth', {});
        this.app.context.redirect('/login');
    }

}