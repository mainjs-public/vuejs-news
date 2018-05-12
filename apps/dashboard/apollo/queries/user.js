import gql from 'graphql-tag';

export const query = gql`
  query {
    users {
      id,
      name,
      email,
      role,
    }
  }
`;

export const addUserMutate = gql`
  mutation createUser($name: String!, $email: String!, $password: String!, $role: String!) {
    createUser(name: $name, email: $email, password: $password, role: $role) {
      id
    }
  }
`;

export const updateUserMutate = gql`
  mutation updateUser($name: String!, $email: String!, $password: String, $role: String!) {
    updateUser(name: $name, email: $email, password: $password, role: $role) {
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
        role,
      },
      token
    }
  }
`;
