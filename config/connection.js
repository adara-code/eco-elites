const Sequelize = require('sequelize');
const dotenv = require('dotenv')


// dotenv.config({path: '../.env'})
dotenv.config()

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    port: process.env.DATABASE_PORT,
    dialect: 'mysql'
  });



console.log(process.env.DATABASE)
console.log(process.env.USER)
console.log(process.env.PASSWORD)
console.log(process.env.HOST)


module.exports = sequelize;






// sequelize.authenticate().then(result => {
//     console.log("Connection successful")
// }).catch(err => {
//     console.log("No connection")
// })
