const sequelize = require("../config/connection");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const { Provider } = require("../models/Provider");

const salt = bcrypt.genSaltSync(10)

dotenv.config()

// signs up the provider and generates a customized token for them
const providerSignUp = async (req, res) => {
    Provider.findAll({
        where : {
            email: req.body.providerEmail
        }
    }).then(rs => {
        if(rs.length >= 1) {
            res.send("Email Exists")
        } else {
            Provider.create({
                fullNames : req.body.providerNames,
                email: req.body.providerEmail,
                phoneNumber: req.body.providerNumber,
                password: bcrypt.hashSync(req.body.providerPassword, salt)
            }).then(rs => {
                const providerToken = jwt.sign(rs.dataValues,process.env.JWT_KEY)
                res.status(200).json([{ message: providerToken }])
            }).catch(err => {
                res.send("Registration Failed")
            })
            
        }
    }).catch(err => {
        console.log(err)
    })
    // res.send("It's working")
}

// provider login credentials
const providerLogin = async (req, res) => {
    Provider.findOne({
        where: {
            email : req.body.providerEmail
        }
    }).then(rs => {
        if(rs) {
            // console.log(rs.dataValues.phoneNumber)
            const checkPassword = bcrypt.compareSync(req.body.providerPassword,rs.dataValues.password)
            if(checkPassword) {
                res.send('Login Succesful')
            }else {
                res.send('username or password is invalid')
            }
        } else {
            res.send('username or password is invalid')
        }
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {providerSignUp, providerLogin}



// sequelize.sync({ force: true }).then(rs => {
//     console.log(rs)
// }).catch(err => {
//     console.log(err)
// })