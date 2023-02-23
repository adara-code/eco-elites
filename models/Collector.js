const Sequelize = require('sequelize')
const sequelize = require('../config/connection')


const Collector = sequelize.define('Collector', {
    collectorId : {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    fullNames: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
})

module.exports = {Collector}