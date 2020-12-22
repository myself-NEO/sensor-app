const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Sensor = new Schema(
    {
        name: { type: Number, required: true },
        time: { type: [String], required: true },
        rating: { type: Number, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('sensor', Sensor)
