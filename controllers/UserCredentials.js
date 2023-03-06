const Sequelize = require('sequelize')
const sequelize = require('../config/connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { UserSignUp } = require('../models/UserSignup')
const { NewsSubscription } = require('../models/newsSubscription')
const { ProfileSetup } = require('../models/ProfileSetup')



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
            }).then(rs => {
                const userToken = jwt.sign(rs.dataValues,process.env.JWT_KEY)
                res.status(200).json([{message: "Signup successful"}])
                console.log(userToken)
            })
        }
    }).catch(err => {
        console.log(err)
    })

    // res.status(200).json([{message: "Touchdown"}])
}

const newsSubscription = async(req,res) => {
    NewsSubscription.create({
        email: req.body.emailSubscription
    }).then(rs => {
        res.status(200).json([{message: "Subscribed"}])
    }).catch(err => {
        res.status(200).json([{message: err}])
    })
    // res.status(200).json([{message: "Touchdown"}])
}

const profileSetup = async(req,res) => {
    const userProfile = {
     userFirstName : req.body.firstName,
     userLastName : req.body.lastName,
     userEmail : req.body.email,
     userPhone : req.body.phoneNumber,
     userGender : req.body.gender,
     userState : req.body.state,
     userType : req.body.typeOfUser,
     userCity : req.body.city,
     userStreet : req.body.street,
    }

    ProfileSetup.create(userProfile).then(rs => {
        console.log(rs)
    }).catch(err => {
        console.log(err)
    })


}



// sequelize.sync({ force: true }).then(rs => {
//     console.log(rs)
// }).catch(err => {
//     console.log(err)
// })


module.exports = {signup, newsSubscription, profileSetup}