const express = require('express')
const { providerSignUp, providerSignIn } = require("../controllers/ProviderCredentials");

const routing = express.Router()

routing.post('/providersignup', providerSignUp)
routing.post('/providerlogin', providerSignIn)

module.exports = routing
