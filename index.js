const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
const routing = require('./routes/rts')

dotenv.config()
const app = express()

const domainsFromEnv = process.env.CORS_DOMAINS || ""

const whitelist = domainsFromEnv.split(",").map(item => item.trim())

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

// enable api to be accessible cross-origin
// app.use(cors())

// enables data to be passed through req.body
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// port setup
const PORT = process.env.PORT

// route setup
app.use('/', routing)


// run server
app.listen(PORT || 4000, () => {
    console.log(`Listening on port ${PORT}`)
})

