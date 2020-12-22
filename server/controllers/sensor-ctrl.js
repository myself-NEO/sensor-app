const Sensor = require('../models/sensor-model')

createSensor = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a sensor name (eg. sensor-1)',
        })
    }

    const sensor = new Sensor(body)

    if (!sensor) {
        return res.status(400).json({ success: false, error: err })
    }

    sensor
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: sensor._id,
                message: 'Temperature added in sensor!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Temperature not added!',
            })
        })
}


getSensorById = async (req, res) => {
    await Sensor.findOne({ _id: req.params.id }, (err, sensor) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: sensor })
    }).catch(err => console.log(err))
}

getSensor = async (req, res) => {
    await Sensor.find({}, (err, sensor) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!sensor.length) {
            return res
                .status(404)
                .json({ success: false, error: `Invalid Sensor` })
        }
        return res.status(200).json({ success: true, data: sensor })
    }).catch(err => console.log(err))
}

module.exports = {
    createSensor,
    getSensor,
    getSensorById,
}
