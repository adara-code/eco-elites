const express = require('express')
const { providerSignUp, providerLogin, resetPasswordProvider } = require("../controllers/ProviderCredentials");
const verifiedAuth = require('../middleware/authentification');


const routing = express.Router()

routing.post('/providersignup', providerSignUp)
routing.post('/providerlogin', providerLogin)
routing.post('/resetpassword',verifiedAuth,resetPasswordProvider)
// routing.post('/resetpassword',resetPassword)

module.exports = routing
