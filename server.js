require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const dnsLookUp = require('./controller/dnsLookUp')
const createUrl = require('./controller/createUrl')
const urlRedirect = require('./controller/urlRedirect')
const connectDB = require('./db/connect.js')

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.urlencoded({extended:false}))

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  
  res.json({ greeting: 'hello API' });
});

app.get('/api/:shorturl', urlRedirect)

app.post('/api/shorturl', dnsLookUp)

const startServer = async () => {
  try{
    await connectDB(process.env.MONGO_URI)
    app.listen(port, function() {
      console.log(`Listening on port ${port}`)
      console.log(`Hello there, ${process.env.MY_STRING}`)
      });
  }catch(error){
    console.log(error)
  }
}

startServer()


