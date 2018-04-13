import gql from 'graphql-tag';
export const query = gql`
  query {
    blogs {
      id,
      name,
      slug,
      created,
      updated,
      status,
      category {
        id,
        name
      },
      image
    }
  }
`;

export const getBlog = gql`
  query blogQuery($blogId: ID!) {
    blog(blogId: $blogId) {
      id,
      name,
      slug,
      created,
      updated,
      status,
      image,
      description,
      content
    }
  }
`;

export const editBlog = gql`
  mutation mutationBlog($input: MutationBlogInput!) {
    mutationBlog(input: $input) {
      id
    }
  }
`;

export const deleteBlog = gql`
  mutation deleteBlog($input: DeleteBlogInput!) {
    deleteBlog(input: $input) {
      count
    }
  }
`;
