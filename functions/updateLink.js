const { UPDATE_LINK } = require("./queries/links")
const response = require("./utils/response")
const query = require("./utils/query")

exports.handler = async (event) => {
  if (event.httpMethod !== "PUT") {
    return response({ error: "Method not allowed" }, 405)
  }

  const variables = JSON.parse(event.body ?? "{}")

  return query(UPDATE_LINK, variables)
    .then((res) => response(res.updateLink, 200))
    .catch((err) => response({ error: err.message }, 500))
}
