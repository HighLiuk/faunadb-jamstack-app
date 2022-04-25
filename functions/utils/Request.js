const { default: axios } = require("axios")
require("dotenv").config()

function response(data, statusCode) {
  return {
    statusCode,
    body: JSON.stringify(data),
  }
}

module.exports = class Request {
  constructor(event) {
    this.method = event.httpMethod
    this.variables = JSON.parse(event.body || "{}")
    this.response = null
  }

  accept(method) {
    if (this.method !== method) {
      this.response = response({ error: "Method not allowed" }, 405)
    }

    return this
  }

  async process(query) {
    const {
      data: { data, errors },
    } = await axios({
      baseURL: "https://graphql.eu.fauna.com/graphql",
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
      },
      data: {
        query,
        variables: this.variables,
      },
    })

    if (errors) {
      console.log(errors)
      throw new Error("Something went wrong")
    }

    return data
  }

  query(query) {
    if (this.response !== null) return this.response

    return this.process(query)
      .then((data) => response(data.data.data, 200))
      .catch((err) => response({ error: err.message }, 500))
  }

  mutation(query) {
    if (this.response !== null) return this.response

    return this.process(query)
      .then((data) => response(data.data, 200))
      .catch((err) => response({ error: err.message }, 500))
  }
}
