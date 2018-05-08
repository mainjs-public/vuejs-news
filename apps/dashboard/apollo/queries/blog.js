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

export const queryPagination = gql`
  query QueryPagination($start: Int!, $length: Int!){
    blogPagination(start: $start, length: $length) {
      count,
      data {
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
        image,
        state,
      },
      length,
      start,
      hasNextPage
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
      description,
      content,
      tags,
      category_id,
      state
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
