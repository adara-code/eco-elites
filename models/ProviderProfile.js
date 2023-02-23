const Sequelize = require('sequelize')
const sequelize = require('../config/connection')


const ProviderProfile = sequelize.define('PProfile', {
    fullNames: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: true
    },
    phoneNumber: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    
})

module.exports = {ProviderProfile}