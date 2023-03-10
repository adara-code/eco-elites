const Sequelize = require('sequelize')
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { UserSignUp } = require('../models/UserSignup')
const { NewsSubscription } = require('../models/newsSubscription')
const { ProfileSetup } = require('../models/ProfileSetup')


const salt = bcrypt.genSaltSync(10)

const signup = async (req,res) => {
    // const userEmail = req.body.emailSignup
    // const userPassword = bcrypt.hashSync(req.body.passwordSignup,salt)

    await UserSignUp.findAll({
        where: {
            email : req.body.email
        }
    }).then(rs => {
        if(rs.length >= 1) {
            res.status(200).json([{message: "Email taken. Try again"}])
        } else {
            UserSignUp.create({
                email : req.body.email,
                password: req.body.password
            }).then(rs => {
                const userToken = jwt.sign(rs.dataValues,process.env.JWT_KEY)
                res.status(200).json([{message: userToken}])
                console.log(userToken)
            })
        }
    }).catch(err => {
        console.log(err)
    })
    // res.status(200).json([{message: "Signup successful"}])
    // res.status(200).json([{message: "Touchdown"}])
}

const newsSubscription = async(req,res) => {
    // NewsSubscription.create({
    //     email: req.body.emailSubscription
    // }).then(rs => {
    //     res.status(200).json([{message: "Subscribed"}])
    // }).catch(err => {
    //     res.status(200).json([{message: err}])
    // })
    res.status(200).json([{message: "Touchdown"}])
}

const profileSetup = async(req,res) => {
    // const userProfile = {
    //  firstName : req.body.fName,
    //  lastName : req.body.lName,
    //  email : req.body.uEmail,
    //  phoneNumber : req.body.uPhoneNumber,
    //  gender : req.body.uGender,
    //  state : req.body.uState,
    //  typeOfUser : req.body.uTypeOfUser,
    //  city : req.body.uCity,
    //  street : req.body.uStreet,
    //  signupUserId: req.decoded.userId
    // }

    // ProfileSetup.create(userProfile).then(rs => {
    //     res.status(200).json([{message: "Profile created"}])
    //     console.log(rs)
    // }).catch(err => {
    //     console.log(err)
    // })

        res.status(200).json([{message: "Touchdown"}])
}



// sequelize.sync({ force: true }).then(rs => {
//     console.log(rs)
// }).catch(err => {
//     console.log(err)
// })


module.exports = {signup, newsSubscription, profileSetup}