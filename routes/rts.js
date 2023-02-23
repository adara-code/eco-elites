const express = require('express')
const { providerSignUp, providerLogin } = require("../controllers/ProviderCredentials");

const routing = express.Router()

routing.post('/providersignup', providerSignUp)
routing.post('/providerlogin', providerLogin)

module.exports = routing
