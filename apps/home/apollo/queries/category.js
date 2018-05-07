import gql from 'graphql-tag';

export const query = gql`
  query {
    categories {
      id,
      name,
      slug,
      blogs {
        id
      }
    }
  }
`;

export const getCategory = gql`
  query categorySlugQuery($slug: String!, $start: Int!, $length: Int!) {
    categorySlug(slug: $slug, start: $start, length: $length) {
      category {
        id,
        name,
        image,
        description
      },
      data {
        id,
        name,
        slug,
        status,
        image,
        created,
        description,
        comments {
          id
        }
      },
      count,
      hasNextPage,
      length,
      start,
    }
  }
`;
