const express = require('express');
const router = express.Router();
const CarController = require('../controllers/carController');

router.get('/', CarController.getAllCars);
router.get('/:id', CarController.getSingleCar);

module.exports = router;
