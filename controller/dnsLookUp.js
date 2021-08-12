
const validUrl = require('valid-url')
const Url = require('../model/Url.js')
const createShortUrl = require('../utils/createShortUrl.js')

const dnsLookUp = async (req,res) => {

	let urlFromForm = req.body.url
	let urlCheck = validUrl.isWebUri(urlFromForm)

	if(!urlCheck){
		return res.status(200).json({ error: 'invalid url' })
	} else{ 


	
	const latestCollection = await Url.find().sort({_id : -1}).limit(1)
		
	const newUrl = await Url.create({url : req.body.url, shortUrl : createShortUrl(latestCollection)})

	// let result = {original_url : urlCheck, short_url : latestCollection[0].shortUrl }

	res.status(201).json({original_url : newUrl.url, short_url : newUrl.shortUrl})
		
	//res.status(200).json({latest_short_url: latestCollection[0].shortUrl})
	

	
	}	
}

module.exports = dnsLookUp