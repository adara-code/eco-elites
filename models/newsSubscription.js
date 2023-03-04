const Sequelize = require('sequelize')
const sequelize = require('../config/connection')


const NewsSubscription = sequelize.define('subscriptionList', {
    email : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

module.exports = {NewsSubscription}