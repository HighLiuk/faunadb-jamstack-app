const { UPDATE_LINK } = require("./queries/links")
const Request = require("./utils/Request")

exports.handler = async (event) => {
  return await new Request(event).accept("PUT").mutation(UPDATE_LINK)
}
