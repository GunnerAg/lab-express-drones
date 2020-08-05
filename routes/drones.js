const express = require('express');
const DroneModel = require('../models/drone.model');

// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
    .then((drones)=>{
      res.render('drones/list.hbs',{drones})
    })
    .catch((err)=>{
      console.error('error is: ',err)
    })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  DroneModel.create(req.body)
    .then(()=>{
      res.redirect('/drones')
    })
    .catch((err)=>{
      res.render('/drones/drone-create.hbs')
    })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
    .then((drone)=>{
      res.render('drones/update-form.hbs',{drone})
    })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  let droneData = req.body
  let droneId = req.params.id
  console.log(req.body)
  DroneModel.findByIdAndUpdate(droneId, droneData)
      .then(()=>{
        res.redirect('/drones')
      })
      .catch((err)=>{
        console.log('error',err)
        res.render('/drones/update-form.hbs')
      })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
