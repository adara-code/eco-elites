const express = require('express')
const { checkingRoute } = require("../controllers/ProviderCredentials");

const routing = express.Router()

routing.get('/', checkingRoute)

module.exports = routing
