const Sequelize = require('sequelize')
const sequelize = require('../config/connection');


const CollectionCenter = sequelize.define('collectionCenter', {
    centerId : {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    rating : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
    ,
    city : {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
})


module.exports = {CollectionCenter}