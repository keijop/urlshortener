
const dns = require('dns')

const dnsLookUp = (req,res) => {

	let host = req.body.url

  console.log(host)

	dns.lookup(host, (err, address) => {
		let result = err ? { error: 'invalid url' } : { original_url : host, short_url : 1}
		res.json(result)
	})
}

module.exports = dnsLookUp