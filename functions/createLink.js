const { CREATE_LINK } = require("./queries/links")
const response = require("./utils/response")
const query = require("./utils/query")

exports.handler = (event) => {
  const variables = JSON.parse(event.body ?? "{}")

  return query(CREATE_LINK, variables)
    .then((res) => response(res.createLink, 200))
    .catch((err) => response({ error: err.message }, 500))
}
