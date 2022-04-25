const { ALL_LINKS } = require("./queries/links")
const Request = require("./utils/Request")

exports.handler = async (event) => {
  return await new Request(event).accept("GET").query(ALL_LINKS)
}
