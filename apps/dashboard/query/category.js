import gql from 'graphql-tag';
export const query = gql`
  query {
    categories {
      id,
      name,
      image,
      description,
      status,
      content,
    }
  }
`;

export const getCategory = gql`
  query categoryQuery($categoryId: ID) {
    category(id: $categoryId) {
      id,
      name,
      image,
      description,
      status,
      content,
    }
  }
`;

export const getCategory = gql`
  query {
    category(id: $categoryId) {
      id,
        name
    }
  }
`;
const a = `query {
  category(categoryId: "5acafee3cfd429988a6df17c") {
    id,
      name
  }
}
`;

export const addCategory = gql`
  mutation mutationCategory($input: Object) {
    mutationCategory(input: $input) {
      id
    }
  }
`;
