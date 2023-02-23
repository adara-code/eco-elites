const sequelize = require("../config/connection");
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const { Provider } = require("../models/Provider");

dotenv.config()


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
                password: req.body.providerPassword
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

module.exports = {providerSignUp}



// sequelize.sync({ force: true }).then(rs => {
//     console.log(rs)
// }).catch(err => {
//     console.log(err)
// })