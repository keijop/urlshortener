
const validUrl = require('valid-url')

const dnsLookUp = (req,res) => {

	let uriFromForm = req.body.url

	let urlCheck = validUrl.isWebUri(uriFromForm)

	let result = urlCheck ? {original_url : urlCheck, short_url : 1} : { error: 'invalid url' }

	res.status(200).json(result)
}

// const dnsLookUp = (req,res) => {

// 	let host = req.body.url

//   console.log(host)

// 	dns.lookup(host, (err, addresses) => {
// 		let result = err ? { error: 'invalid url' } : { original_url : host, short_url : 1, addresses: addresses}
// 		res.json(result)
// 	})
// }

module.exports = dnsLookUp