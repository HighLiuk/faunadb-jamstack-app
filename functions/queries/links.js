module.exports = {
  ALL_LINKS: `
    query {
      allLinks {
        data {
          _id
          name
          url
          description
          archived
        }
      }
    }
  `,
  CREATE_LINK: `
    mutation ($name: String!, $url: String!, $description: String!) {
      createLink(
        data: {
          name: $name
          url: $url
          description: $description
          archived: false
        }
      ) {
        _id
        name
        url
        description
        archived
      }
    }
  `,
  UPDATE_LINK: `
    mutation (
      $id: ID!
      $name: String!
      $url: String!
      $description: String!
      $archived: Boolean!
    ) {
      updateLink(
        id: $id
        data: {
          name: $name
          url: $url
          description: $description
          archived: $archived
        }
      ) {
        _id
        name
        url
        description
        archived
      }
    }
  `,
  DELETE_LINK: `
    mutation ($id: ID!) {
      deleteLink(id: $id) {
        _id
        name
        url
        description
        archived
      }
    }
  `,
}
