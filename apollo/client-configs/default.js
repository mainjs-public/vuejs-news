import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
 
export default (ctx) => {
  const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql' })
 
  return {
    link: httpLink,
    cache: new InMemoryCache()
  }
}