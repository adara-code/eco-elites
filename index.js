const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
const routing = require('./routes/rts')

dotenv.config()
const app = express()

app.use(cors())


// const corsOptions = {
//   origin: 'http://localhost:3000/',
//   credentials: true,
//   optionSuccessStatus: 200
// }

// app.use(cors(corsOptions))
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', "http://localhost:3000");

// });

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
app.use('/', routing)


// run server
app.listen(PORT || 4000, () => {
    console.log(`Listening on port ${PORT}`)
})

