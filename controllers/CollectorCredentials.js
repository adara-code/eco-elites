const Sequelize = require('sequelize')
const sequelize = require("../config/connection");
const { Collector } = require("../models/Collector");
const { CollectorProfile } = require("../models/CollectorProfile");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')

const salt = bcrypt.genSaltSync(10)

dotenv.config()

// signs up the collector and generates a customized token for them
const collectorSignUp = async (req, res) => {
    // Collector.findAll({
    //     where : {
    //         email: req.body.collectorEmail
    //     }
    // }).then(rs => {
    //     if(rs.length >= 1) {
    //         res.status(200).json([{message:"Email Exists"}])
    //     } else {
    //         Collector.create({
    //             fullNames : req.body.collectorNames,
    //             email: req.body.collectorEmail,
    //             address: req.body.collectorAddress,
    //             phoneNumber: req.body.collectorNumber,
    //             password: bcrypt.hashSync(req.body.collectorPassword, salt)
    //         }).then(rs => {
    //             const collectorToken = jwt.sign(rs.dataValues,process.env.JWT_KEY)
    //             res.status(200).json([{ message: collectorToken }])
    //         }).catch(err => {
    //             res.status(200).json([{message: "Registration Failed"}])
    //         })
            
    //     }
    // }).catch(err => {
    //     console.log(err)
    // })

    res.send("It's working")
}

// collector login credentials
const collectorLogin = async (req, res) => {
    // Collector.findOne({
    //     where: {
    //         email : req.body.collectorEmail
    //     }
    // }).then(rs => {
    //     if(rs) {
    //         // console.log(rs.dataValues.phoneNumber)
    //         const checkPassword = bcrypt.compareSync(req.body.collectorPassword,rs.dataValues.password)
    //         if(checkPassword) {
    //             res.status(200).json([{message:'Login Succesful'}])
    //         }else {
    //             res.status(200).json([{message:'username or password is invalid'}])
    //         }
    //     } else {
    //         res.status(200).json([{message: 'username or password is invalid'}])
    //     }
    // }).catch(err => {
    //     console.log(err)
    // })

    res.send("It's working")
}

// update provider password
const resetPasswordCollector = async (req, res) => {
    // Collector.findOne({
    //     where : {
    //         email : req.body.collectorEmail
    //     }
    // }).then(rs => {
    //     if(rs) {
    //         Collector.update({
    //             password: bcrypt.hashSync(req.body.resetPasswordCollect, salt)
    //         }, {
    //             where: {
    //                 collectorId: req.decoded.collectorId
    //             }
    //         }
            
    //         )
    //         res.status(200).json([{message: "Password updated"}])
    //     } else {
    //         res.status(200).json([{message: "Email not found"}])
    //     }
    // }).catch(err => {
    //     console.log(err)
    // })

    res.send("It's working")


    // await Provider 
    // res.send(req.decoded)
}

// create provider profile
const collectorProfile = async (req,res) => {
    // CollectorProfile.create({
    //     fullNames : req.body.collectorNames,
    //     email: req.body.collectorEmail,
    //     address: req.body.collectorAddress,
    //     phoneNumber: req.body.collectorNumber
    // }).then(rs => {
    //     res.status(200).json([{message: rs}])
    // }).catch(err => {
    //     console.log(err)
    // })

    res.send("It's working")
}


module.exports = {collectorSignUp, collectorLogin, resetPasswordCollector, collectorProfile}





