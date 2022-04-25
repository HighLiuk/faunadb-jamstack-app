const { CREATE_LINK } = require("./queries/links")
const Request = require("./utils/Request")

exports.handler = async (event) => {
  return await new Request(event).accept("POST").mutation(CREATE_LINK)
}
