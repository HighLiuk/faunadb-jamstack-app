const { ALL_LINKS } = require("./queries/links")
const response = require("./utils/response")
const query = require("./utils/query")

exports.handler = (event) => {
  return query(ALL_LINKS)
    .then((res) => response(res.allLinks.data, 200))
    .catch((err) => response({ error: err.message }, 500))
}
