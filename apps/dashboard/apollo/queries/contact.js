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

export const getContact = gql`
  query contactQuery($contactId: ID!) {
    contact(contactId: $contactId) {
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

export const editContact = gql`
  mutation mutationContact($input: MutationContactInput!) {
    mutationContact(input: $input) {
      email
    }
  }
`;
export const deleteContact = gql`
  mutation deleteContact($input:  DeleteContactInput!) {
    deleteContact(input: $input) {
      count
    }
  }
`;
