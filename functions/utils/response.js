module.exports = (data, statusCode) => {
  return {
    statusCode,
    body: JSON.stringify(data),
  }
}
