import gql from 'graphql-tag';

export const query = gql`
  query imagesByFolderId($folder_id: String) {
    imagesByFolderId(folder_id: $folder_id) {
      id,
      name,
      path,
      created,
    }
  }
`;
