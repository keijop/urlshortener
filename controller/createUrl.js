const Url = require('../model/Url.js')

const createUrl = (url) => {
	Url.create(req.body, 1)
}

module.exports = createUrl