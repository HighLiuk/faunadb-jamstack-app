const { default: axios } = require("axios")
require("dotenv").config()

const GET_LINKS = `
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
`

exports.handler = async (event) => {
  const { data } = await axios({
    baseURL: "https://graphql.eu.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
    },
    data: {
      query: GET_LINKS,
      variables: {},
    },
  })

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}
