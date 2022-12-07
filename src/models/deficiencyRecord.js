const mongoose = require('mongoose')

const deficiencyRecordSchema = new mongoose.Schema({
    selectedSimulator :{
        type: String
    },
    drDescription :{
        type: String
    },
    drResolution :{
        type: String
    },
    reportedById :{
        type: String,
    },
    workedWithId1 :{
        type: String
    },
    workedWithId2 :{
        type: String,
    },
    workedWithId3 :{
        type: String,
        trim: true
    },
    workedWithId4 :{
        type: String
    },
    workedWithId5 :{
        type: String
    },
    drComplexity :{
        type: String
    },
    drStatus :{
        type: String
    },
}, {
    timestamps: true
})

const DeficiencyRecord = mongoose.model('DeficiencyRecord', deficiencyRecordSchema )

module.exports = DeficiencyRecord