
const dns = require('dns')

const dnsLookUp = (req,res) => {

	let host = req.body
	console.log(typeof req.body)
	dns.lookup(host, (err, address) => {
		let result = err ? { error: 'invalid url' } : { original_url : host, short_url : 1, address : address}
		res.json(result)
	})
}

module.exports = dnsLookUp