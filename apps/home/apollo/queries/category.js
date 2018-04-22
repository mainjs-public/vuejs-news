import gql from 'graphql-tag';
export const query = gql`
  query {
    categories {
      id,
      name,
      image,
      slug,
      created
    }
  }
`;

export const getCategory = gql`
  query categoryQuery($categoryId: ID!) {
    category(categoryId: $categoryId) {
      id,
      name,
      image,
      description,
      slug,
      status
    }
  }
`;
