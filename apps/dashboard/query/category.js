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

export const addCategory = gql`
  mutation mutationCategory($input: Object) {
    mutationCategory(input: $input) {
      id
    }
  }
`;
