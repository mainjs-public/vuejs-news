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
  query categoryQuery($slug: String!) {
    categorySlug(slug: $slug) {
      id,
      name,
      image,
      description,
      slug,
      status
    }
  }
`;
