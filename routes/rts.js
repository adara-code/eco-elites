const express = require('express');
const { signup, newsSubscription, profileSetup } = require('../controllers/UserCredentials');
const verifiedAuth = require('../middleware/authentification');




const routing = express.Router()

routing.post('/signup', signup)
routing.post('/subscriptions', newsSubscription)
routing.post('/profile', profileSetup)




module.exports = routing
