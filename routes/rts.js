const express = require('express');
const { testing } = require('../controllers/CollectionCenterObjects');
const { signup, newsSubscription, profileSetup } = require('../controllers/UserCredentials');
const verifiedAuth = require('../middleware/authentification');




const routing = express.Router()

routing.post('/registration', signup)
routing.post('/subscriptions', newsSubscription)
routing.post('/profile', verifiedAuth,profileSetup)
routing.post('/centers', testing)




module.exports = routing
