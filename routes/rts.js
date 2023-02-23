const express = require('express')
const { providerSignUp, providerLogin, resetPasswordProvider, providerProfile } = require("../controllers/ProviderCredentials");
const {collectorSignUp, collectorLogin, resetPasswordCollector, collectorProfile} = require("../controllers/CollectorCredentials")
const verifiedAuth = require('../middleware/authentification');


const routing = express.Router()

// Provider Routing
routing.post('/providersignup', providerSignUp)
routing.post('/providerlogin', providerLogin)
routing.put('/resetproviderpassword',verifiedAuth,resetPasswordProvider)
routing.post('/providerprofile', verifiedAuth,providerProfile)

// Collector Routing
routing.post('/collectorsignup', collectorSignUp)
routing.post('/collectorlogin', collectorLogin)
routing.put('/resetcollectorpassword',verifiedAuth,resetPasswordCollector)
routing.post('/collectorprofile', verifiedAuth,collectorProfile)





module.exports = routing
