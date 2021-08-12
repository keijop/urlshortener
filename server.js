require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const urls = require('./routes/urls.js')

const connectDB = require('./db/connect.js')

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.urlencoded({extended:false}))

app.use(express.static(`${process.cwd()}/public`));

// app.get('/', function(req, res) {
//   res.sendFile(process.cwd() + '/views/index.html');
// });

// Routes
app.use('/api/shorturl', urls)


// Connect to DB and if success start server
const startServer = async () => {
  try{
    await connectDB(process.env.MONGO_URI)
    app.listen(port, function() {
      console.log(`Listening on port ${port}`)
      });
  }catch(error){
    console.log(error)
  }
}

startServer()


