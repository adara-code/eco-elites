const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
const {router} = require('./routes/rts.js')

dotenv.config()
const app = express()
// port setup
const PORT = process.env.PORT

// setting up cross-origin policy
app.use(cors())

// enables data to be passed through req.body
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// route setup
app.use('/', router)


// run server
app.listen(PORT || 4000, () => {
    console.log(`Listening on port ${PORT}`)
})

