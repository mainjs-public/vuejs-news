import gql from 'graphql-tag';
export const query = gql`
  query {
    folders {
      id,
      name,
      path,
      created,
    }
  }
`;

export const createFolder = gql`
  mutation createFolder($input: CreateFolderInput!) {
    createFolder(input: $input) {
      id
    }
  }
`;

export const deleteFolder = gql`
  mutation deleteFolder($input: DeleteFolderInput!) {
    deleteFolder(input: $input) {
      count
    }
  }
`;