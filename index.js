const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
const routing = require('./routes/rts')

dotenv.config()
const app = express()


// enable api to be accessible cross-origin
const whitelist = ['http://localhost:3000', 'https://planetprotectors.netlify.app']
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error())
    }
  }
}

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// enables data to be passed through req.body
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// port setup
const PORT = process.env.PORT

// route setup
app.use('/', cors(corsOptions),routing)


// run server
app.listen(PORT || 4000, () => {
    console.log(`Listening on port ${PORT}`)
})

