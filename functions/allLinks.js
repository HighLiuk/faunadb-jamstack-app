const { ALL_LINKS } = require("./queries/links")
const response = require("./utils/response")
const query = require("./utils/query")

exports.handler = async (event) => {
  if (event.httpMethod !== "GET") {
    return response({ error: "Method not allowed" }, 405)
  }

  return query(ALL_LINKS)
    .then((res) => response(res.allLinks.data, 200))
    .catch((err) => response({ error: err.message }, 500))
}
