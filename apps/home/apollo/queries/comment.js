import gql from 'graphql-tag'

export const queryPagination = gql`
  query QueryPagination($start: Int!, $length: Int!){
    commentPagination(start: $start, length: $length) {
      count,
      data {
        id,
        name,
        email,
        created,
        comment
      },
      length,
      start,
      hasNextPage,
    }
  }
`;

export const addComment = gql`
  mutation addComment($input: AddCommentInput!) {
    addComment(input: $input) {
      id
    }
  }
`;
