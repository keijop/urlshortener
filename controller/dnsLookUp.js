
const validUrl = require('valid-url')

const dnsLookUp = (req,res) => {

	let urlFromForm = req.body.url

	let urlCheck = validUrl.isWebUri(urlFromForm)

	let result = urlCheck ? {original_url : urlCheck, short_url : 1} : { error: 'invalid url' }

	res.status(200).json(result)
}

module.exports = dnsLookUp