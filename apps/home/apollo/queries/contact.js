import gql from 'graphql-tag'

export const query = gql`
  query {
    contacts {
      id,
      firstName,
      lastName,
      phone,
      email,
      message,
      read
    }
  }
`;

export const addContact = gql`
  mutation mutationContact($input: MutationContactInput!) {
    mutationContact(input: $input) {
      email
    }
  }
`;
