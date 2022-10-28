const mongoose = require('mongoose')

const TrainingSessionSchema = new mongoose.Schema({
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
    trainingDate :{
        type: String,
    },
    trainingStartTime :{
        type: String,
    },
    trainingEndTime :{
        type: String
    },
    isTrainingCanceled :{
        type: String,
    },
    isTrainingOnProgress :{
        type: String
    },
}, {
    timestamps: true
})

const TrainingSession = mongoose.model('TrainingSession', TrainingSessionSchema)

module.exports = TrainingSession