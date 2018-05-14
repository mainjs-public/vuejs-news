import gql from 'graphql-tag'

export const searchPaginationQuery = gql`
  query searchPagination($query: String!, $start: Int!, $length: Int!){
    search(query: $query, start: $start, length: $length) {
      count,
      data {
        id,
        name,
        slug,
        description,
        created,
        updated,
        status,
        category {
          id,
          name,
          slug
        },
        image,
        comments {
          id
        }
      },
      length,
      start,
      hasNextPage,
    }
  }
`;
