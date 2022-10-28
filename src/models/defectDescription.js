const mongoose = require('mongoose')

const defectDescriptionSchema = new mongoose.Schema({
    selectedSimulator :{
        type: String
    },
    trainingType :{
        type: String
    },
    flightCrew :{
        type: String
    },
    captName1 :{
        type: String,
        trim: true
    },
    captName2 :{
        type: String,
        trim: true
    },
    foName1 :{
        type: String,
        trim: true
    },
    foName2 :{
        type: String,
        trim: true
    },
    captId1 :{
        type: String
    },
    captId2 :{
        type: String
    },
    foId1 :{
        type: String
    },
    foId2 :{
        type: String
    },
    defectDescription :{
        type: String,
        trim: true
    },
    action :{
        type: String,
        trim: true
    },
    defectRecordedDate :{
        type: String
    },
    defectClearedDate :{
        type: String
    },
    defectClearedBy :{
        type: String
    },
}, {
    timestamps: true
})

const DefectDescription = mongoose.model('DefectDescription', defectDescriptionSchema )

module.exports = DefectDescription