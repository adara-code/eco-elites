const Sequelize = require('sequelize')
const { UserSignUp } = require('../models/UserSignup')

const signup = async (req,res) => {
    const userEmail = req.body.emailSignup
    const userPassword = req.body.passwordSignup

    res.status(200).json([{message: "Touchdown"}])
}

module.exports = {signup}