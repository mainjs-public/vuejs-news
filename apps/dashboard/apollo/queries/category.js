import gql from 'graphql-tag';
export const query = gql`
  query {
    categories {
      id,
      name,
      image,
      slug,
      status,
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
      status,
      content,
      slug,
    }
  }
`;

export const addCategory = gql`
  mutation mutationCategory($input: MutationCategoryInput!) {
    mutationCategory(input: $input) {
      id
    }
  }
`;

export const deleteCategory = gql`
  mutation deleteCategory($input: DeleteCategoryInput!) {
    deleteCategory(input: $input) {
      count
    }
  }
`;
