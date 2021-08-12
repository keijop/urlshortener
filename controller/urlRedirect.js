const Url = require('../model/Url.js')

const urlRedirect = async (req, res) => {
	
	const url = req.params.shorturl
	
	const urlMatchFromDB = await Url.findOne({shortUrl : url})

	if(urlMatchFromDB){
		return res.redirect(301, urlMatchFromDB.url)
	}else{
		res.status(404).json({error : 'invalid url'})
	}

}

module.exports = urlRedirect