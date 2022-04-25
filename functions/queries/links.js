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
}
