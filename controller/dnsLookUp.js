const isUrlValid = require('../utils/isUrlValid.js')
const Url = require('../model/Url.js')
const createShortUrl = require('../utils/createShortUrl.js')

const dnsLookUp = async (req,res) => {

	//not valid url
	if(!isUrlValid(req.body.url)){
		return res.status(200).json({ error: 'invalid url' })
	} else{ 

	const url = await Url.findOne({url : isUrlValid(req.body.url)})

	//url does not exist in DB
	if(!url){
	const latestCollection = await Url.find().sort({_id : -1}).limit(1)
	const newUrl = await Url.create({url : req.body.url, shortUrl : createShortUrl(latestCollection)})
	return res.status(201).json({original_url : newUrl.url, short_url : newUrl.shortUrl})
	//url already exist in DB
	} else {
	 	res.status(200).json({original_url : url.url, short_url : url.shortUrl})
	}	
	}
}

module.exports = dnsLookUp