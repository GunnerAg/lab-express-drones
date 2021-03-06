// Iteration #1
require('../configs/db.config');
const mongoose = require ('mongoose');
const DroneModel = require("../models/drone.model");

let initialDrones=[
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
];

DroneModel.create(initialDrones)
.then((init) => {
    console.log(init.length)
    mongoose.connection.close()
        .then(() => {
            console.log('Heyy connection is closed!')
        })
})
