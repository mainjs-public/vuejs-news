import gql from 'graphql-tag';
export const query = gql`
  query {
    blogs {
      id,
      name,
      slug,
      description,
      created,
      status,
      image,
      category {
        id,
        name
      },
      comments {
        id
      }
    }
  }
`;
export const getBlogBySlug = gql`
  query blogSlugQuery($slug: String!) {
    blogSlug(slug: $slug) {
      id,
      name,
      slug,
      status,
      image,
      category {
        id,
        name
      },
      created,
      description,
      content,
      comments {
        id,
        content,
        created,
        title,
        status
      },
      tags
    }
  }
`;
export const getBlog = gql`
  query blogQuery($blogId: ID!) {
    blog(blogId: $blogId) {
      id,
      name,
      slug,
      status,
      image,
      category {
        id,
      },
      description,
      content,
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
