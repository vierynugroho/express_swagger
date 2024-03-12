const express = require('express');
const { getAllCars, getCarsById, createCar, updateCar, deleteCar } = require('../controllers/cars-controller');

const router = express.Router();

router.get('/', getAllCars);
router.get('/detail/:id', getCarsById);
router.post('/create', createCar);
router.put('/update/:id', updateCar);
router.delete('/delete/:id', deleteCar);

module.exports = router;
