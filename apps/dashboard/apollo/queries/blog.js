import gql from 'graphql-tag';
export const query = gql`
  query {
    blogs {
      id,
      name,
      image,
      slug,
      created,
      updated,
      status,
    }
  }
`;

export const addBlog = gql`
  mutation mutationBlog($input: MutationBlogInput!) {
    mutationBlog(input: $input) {
      id
    }
  }
`;
