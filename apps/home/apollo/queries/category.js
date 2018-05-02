import gql from 'graphql-tag';
export const query = gql`
  query {
    categories {
      id,
      name,
      image,
      slug,
      created
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
