const sequelize = require("../config/connection");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')
const { Provider } = require("../models/Provider");
const { where } = require("sequelize");
const { ProviderProfile } = require("../models/ProviderProfile");



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
            res.status(200).json([{message:"Email Exists"}])
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
                res.status(200).json([{message: "Registration Failed"}])
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
                res.status(200).json([{message:'Login Succesful'}])
            }else {
                res.status(200).json([{message:'username or password is invalid'}])
            }
        } else {
            res.status(200).json([{message: 'username or password is invalid'}])
        }
    }).catch(err => {
        console.log(err)
    })

    // res.send("It's working")
}

// update provider password
const resetPasswordProvider = async (req, res) => {
    Provider.findOne({
        where : {
            email : req.body.providerEmail
        }
    }).then(rs => {
        if(rs) {
            Provider.update({
                password: bcrypt.hashSync(req.body.resetPasswordProvide, salt)
            }, {
                where: {
                    providerId: req.decoded.providerId
                }
            }
            
            )
            res.status(200).json([{message: "Password updated"}])
        } else {
            res.status(200).json([{message: "Email not found"}])
        }
    }).catch(err => {
        console.log(err)
    })

    // res.send("It's working")


    // await Provider 
    // res.send(req.decoded)
}

// create provider profile
const providerProfile = async (req,res) => {
    ProviderProfile.create({
        fullNames : req.body.providerNames,
        email: req.body.providerEmail,
        phoneNumber: req.body.providerNumber
    }).then(rs => {
        res.status(200).json([{message: rs}])
    }).catch(err => {
        console.log(err)
    })

    // res.send("It's working")
}


module.exports = {providerSignUp, providerLogin, resetPasswordProvider, providerProfile}



// sequelize.sync({ force: true }).then(rs => {
//     console.log(rs)
// }).catch(err => {
//     console.log(err)
// })