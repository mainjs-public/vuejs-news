import gql from 'graphql-tag';

export const query = gql`
  query imagesByFolderId($folder_id: String, $key: Int) {
    imagesByFolderId(folder_id: $folder_id, key: $key) {
      id,
      name,
      path,
      created,
    }
  }
`;
