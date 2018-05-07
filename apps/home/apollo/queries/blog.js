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
        name,
        slug
      },
      comments {
        id
      }
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
        description,
        created,
        updated,
        status,
        category {
          id,
          name,
          slug
        },
        image,
        comments {
          id
        }
      },
      length,
      start,
      hasNextPage,
    }
  }
`;

export const getBlogLatest = gql`
  query getBlogLatest($number: Int!) {
    getBlogLatest(number: $number) {
      id,
      name,
      slug,
      description,
      created,
      image,
      category {
        id,
        name,
        slug
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
        name,
        slug
      },
      created,
      description,
      content,
      tags,
      comments {
        id
      }
    }
  }
`;
