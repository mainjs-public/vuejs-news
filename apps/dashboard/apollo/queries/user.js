import gql from 'graphql-tag';

export const createUserMutate = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      id
    }
  }
`;

export const signInMutate = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      user {
        id,
        name,
        email,
      },
      token
    }
  }
`;
