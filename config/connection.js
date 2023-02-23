const Sequelize = require('sequelize');
const dotenv = require('dotenv')


dotenv.config({path: '../.env'})
// dotenv.config()

const sequelize = new Sequelize("ecoelites", "root", "gue55me", {
    host: 'localhost',
    dialect: 'mysql'
  });

module.exports = sequelize;






// sequelize.authenticate().then(result => {
//     console.log("Connection successful")
// }).catch(err => {
//     console.log("No connection")
// })
