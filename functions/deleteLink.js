const { DELETE_LINK } = require("./queries/links")
const Request = require("./utils/Request")

exports.handler = async (event) => {
  return await new Request(event).accept("DELETE").mutation(DELETE_LINK)
}
