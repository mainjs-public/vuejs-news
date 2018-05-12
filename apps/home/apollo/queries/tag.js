import gql from 'graphql-tag';

export const queryPagination = gql`
  query tagPagination($tag: String!, $start: Int!, $length: Int!){
    tagPagination(tag: $tag, start: $start, length: $length) {
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
