const Sequelize = require('sequelize')
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt')
const { UserSignUp } = require('../models/UserSignup')

const salt = bcrypt.genSaltSync(10)

const signup = async (req,res) => {
    const userEmail = req.body.emailSignup
    const userPassword = bcrypt.hashSync(req.body.passwordSignup,salt)

    UserSignUp.findAll({
        where: {
            email : userEmail
        }
    }).then(rs => {
        if(rs.length > 0) {
            res.status(200).json([{message: "Email taken. Try again"}])
        } else {
            UserSignUp.create({
                email : userEmail,
                password: userPassword
            })
            res.status(200).json([{message: "Signup successful"}])
        }
        console.log(rs)
    }).catch(err => {
        console.log(err)
    })

    // res.status(200).json([{message: "Touchdown"}])
}

// sequelize.sync({ force: true }).then(rs => {
//     console.log(rs)
// }).catch(err => {
//     console.log(err)
// })

module.exports = {signup}