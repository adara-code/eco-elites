const express = require('express');
const { centersList } = require('../controllers/CollectionCenterObjects');
const { signup, newsSubscription, profileSetup } = require('../controllers/UserCredentials');
const verifiedAuth = require('../middleware/authentification');



const routing = express.Router()

routing.post('/registration', signup)
routing.post('/subscriptions', newsSubscription)
routing.post('/profile', verifiedAuth,profileSetup)
routing.post('/centers', centersList)




module.exports = routing
