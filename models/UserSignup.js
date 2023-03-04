const Sequelize = require('sequelize')
const sequelize = require('../config/connection')


const UserSignUp = sequelize.define('signup', {
    userId : {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    email : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
})

module.exports = {UserSignUp}