import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory'

export default (ctx) => {
    const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql' });

    const authLink = setContext((req, { headers }) => {
        const auth = ctx.store.state.auth;
        const token = auth && auth.token ? auth.token : '';
        return {
            headers: {
                ...headers,
                Authorization: token ? token : "",
            }
        }
    });

    return {
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    }
}