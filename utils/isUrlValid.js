const validUrl = require('valid-url')

const isUrlValid = (url) => validUrl.isWebUri(url)

module.exports = isUrlValid