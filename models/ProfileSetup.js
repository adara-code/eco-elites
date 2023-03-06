const Sequelize = require('sequelize')
const sequelize = require('../config/connection')


const ProfileSetup = sequelize.define('profile', {
    firstName : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    lastName : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    email : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    phoneNumber : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    gender : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    state : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    typeOfUser : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    city : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    street : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
    
})

module.exports = {ProfileSetup}