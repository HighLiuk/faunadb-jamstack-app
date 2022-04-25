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
}
