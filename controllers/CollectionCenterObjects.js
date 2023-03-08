const Sequelize = require('sequelize')
const sequelize = require('../config/connection');
const { CollectionCenter } = require('../models/CollectionCenters');


// const centers = await CollectionCenter.create(
//     { name: "Elliot Collection Center",
//     rating: "23",
//     city: "2a, Rumokoro"
// });

const testing = async (req, res) => {
    //creates the collection centers in the database
    CollectionCenter.bulkCreate([
        {
            name: "Elliot Collection Center",
            rating: "23",
            city: "42, Hallway Ikeja Lagos"
        },
        {
            name: "Josephine Collection Center",
            rating: "25",
            city: "2a, Rumokoro New Layout"
        },
        
        {
            name: "Ella Collection Center",
            rating: "20",
            city: "13b, Brown Avenue Way"
        },
        
        {
            name: "Joe Collection Center",
            rating: "25",
            city: "3b, Olaiya Arinze Osun"
        },
        
        {
            name: "Alex Collection Center",
            rating: "23",
            city: "13, Benson street Ilaro"
        },
        {
            name: "Omonot Collection Center",
            rating: "14",
            city: "42, Cole Street Surulere"
        },
        {
            name: "Reham Collection Center",
            rating: "19",
            city: "44, Bologun Road Aruwa"
        },
        {
            name: "James Collection Center",
            rating: "10",
            city: "9b, Collins Estate"
        },
        {
            name: "Dian Collection Center",
            rating: "25",
            city: "3b, Townhall Avenue"
        },
        {
            name: "Bela Collection Center",
            rating: "12",
            city: "5, Olushala, Alinoo Close"
        },
        {
            name: "Jerome Collection Center",
            rating: "23",
            city: "48, Waybrain Akure"
        },
        {
            name: "Daniel Collection Center",
            rating: "20",
            city: "10, Mafelola Avenue Marinna"
        },
        {
            name: "Zino Collection Center",
            rating: "20",
            city: "6, Nicholas road"
        },
        {
            name: "Miaro Collection Center",
            rating: "16",
            city: "23, Macauley Island way"
        },
        {
            name: "Golden Collection Center",
            rating: "18",
            city: "22, Mafoluku Lagos"
        },
        {
            name: "Iyanu Collection Center",
            rating: "24",
            city: "84, Steven Orekoya"
        },
        {
            name: "Innocent Collection Center",
            rating: "10",
            city: "30, Oluwole Awasin Oyo"
        },
        {
            name: "Odara Collection Center",
            rating: "20",
            city: "41, Conoil Adeola Road"
        }, 
    ]).then(rs => {
            // res.status(200).json({ message: "DB Touchdown" })
            console.log(rs)
        }).catch(err => {
            console.log(err)
        })
        // res.status(200).json({ message: "DB Touchdown" })


    // retrieves the collection details
    CollectionCenter.findAll().then(rs => {
        res.status(200).json({message : rs})
    }).catch(err => {
        console.log(err)
    })
    
}


// sequelize.sync({ force: true }).then(rs => {
//     console.log(rs)
// }).catch(err => {
//     console.log(err)
// })

// Jane exists in the database now!
// console.log(jane instanceof User); // true
// console.log(jane.name); // "Jane"

module.exports = { testing }