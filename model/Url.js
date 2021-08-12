const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
	url: {
		type: String,
		trim: true,
		lowercase: true
		},
	shortUrl: Number
})

module.exports = mongoose.model('Url', urlSchema)