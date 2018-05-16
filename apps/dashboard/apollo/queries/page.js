import gql from 'graphql-tag';

export const queryPagination = gql`
  query QueryPagination($start: Int!, $length: Int!){
    pagePagination(start: $start, length: $length) {
      count,
      data {
        id,
        name,
        slug,
        created,
        updated,
        status,
        image,
        state,
        viewed
      },
      length,
      start,
      hasNextPage
    }
  }
`;

export const getPage = gql`
  query pageQuery($pageId: ID!) {
    page(pageId: $pageId) {
      id,
      name,
      slug,
      status,
      image,
      description,
      content,
      state
    }
  }
`;

export const editPage = gql`
  mutation mutationPage($input: MutationPageInput!) {
    mutationPage(input: $input) {
      id
    }
  }
`;

export const deletePage = gql`
  mutation deletePage($input: DeletePageInput!) {
    deletePage(input: $input) {
      count
    }
  }
`;
