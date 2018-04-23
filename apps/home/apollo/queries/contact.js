import gql from 'graphql-tag'

export const addContact = gql`
  mutation mutationContact($input: MutationContactInput!) {
    mutationContact(input: $input) {
      email
    }
  }
`;
