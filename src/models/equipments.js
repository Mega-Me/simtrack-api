const mongoose = require('mongoose')
const equipmentsSchema = new mongoose.Schema({
    simulatorName :{
        type: String,
        unique : true,
    },
    simulatorType :{
        type: String,
        trim: true
    },
    simulatorVendor :{
        type: String,
        trim: true
    },
}, {
    timestamps: true
})

const Equipments = mongoose.model('Equipments', equipmentsSchema )

module.exports = Equipments