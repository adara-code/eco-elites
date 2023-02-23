const express = require('express')
const { providerSignUp } = require("../controllers/ProviderCredentials");

const routing = express.Router()

routing.get('/providersignup', providerSignUp)

module.exports = routing
