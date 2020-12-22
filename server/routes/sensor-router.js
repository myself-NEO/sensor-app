const express = require('express')

const SensorCtrl = require('../controllers/sensor-ctrl')

const router = express.Router()

router.post('/sensor', SensorCtrl.createSensor)
router.get('/sensor/:id', SensorCtrl.getSensorById)
router.get('/sensors', SensorCtrl.getSensor)

module.exports = router
