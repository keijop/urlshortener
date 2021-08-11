const mongoose = require('mongoose')

//connectDB returns a promise
const connectDB = (url) => {
	return mongoose.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	})
}

module.exports = connectDB


	


