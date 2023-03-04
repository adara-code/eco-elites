const Sequelize = require('sequelize')
const sequelize = require('../config/connection')


const CollectorProfile = sequelize.define('CProfile', {
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
    collectionCenter : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
    
})

module.exports = {CollectorProfile}