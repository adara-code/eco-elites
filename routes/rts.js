const express = require('express')
const { providerSignUp, providerLogin, resetPasswordProvider, providerProfile } = require("../controllers/ProviderCredentials");
const verifiedAuth = require('../middleware/authentification');


const routing = express.Router()

// Provider Routing
routing.post('/providersignup', providerSignUp)
routing.post('/providerlogin', providerLogin)
routing.post('/resetpassword',verifiedAuth,resetPasswordProvider)
routing.post('/providerprofile', verifiedAuth,providerProfile)





module.exports = routing
