const express = require('express');
const { centersList } = require('../controllers/CollectionCenterObjects.js');
const { signup, newsSubscription, profileSetup } = require('../controllers/UserCredentials.js');
const verifiedAuth = require('../middleware/authentification.js');

const router = express.Router()

router.post('/registration', signup)
router.post('/subscriptions', newsSubscription)
router.post('/profile', verifiedAuth,profileSetup)
router.post('/centers', centersList)




module.exports = {router}
