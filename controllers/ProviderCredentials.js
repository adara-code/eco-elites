const sequelize = require("../config/connection");
const { Provider } = require("../models/Provider");




const providerSignUp = async (req, res) => {
    // Provider.findAll({
    //     where : {
    //         email: req.body.providerEmail
    //     }
    // }).then(rs => {
    //     if(rs.length >= 1) {
    //         res.send("Email Exists")
    //     } else {
    //         Provider.create({
    //             fullNames : req.body.providerNames,
    //             email: req.body.providerEmail,
    //             phoneNumber: req.body.providerNumber,
    //             password: req.body.providerPassword
    //         })
    //         res.send("User created")
    //     }
    // }).catch(err => {
    //     console.log(err)
    // })

    
    res.send("It's working")
}

module.exports = {providerSignUp}



sequelize.sync({ force: true }).then(rs => {
    console.log(rs)
}).catch(err => {
    console.log(err)
})