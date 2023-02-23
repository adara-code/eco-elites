const Sequelize = require('sequelize')
const sequelize = require('../config/connection')


const CollectorProfile = sequelize.define('CProfile', {
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
    address: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
    
})

module.exports = {CollectorProfile}