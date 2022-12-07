const mongoose = require('mongoose')

const CabinCrewTrainingSessionSchema = new mongoose.Schema({
    selectedSimulator :{
        type: String
    },
    trainingType :{
        type: String
    },
    instructorName :{
        type: String
    },
    instructorId :{
        type: String,
        trim: true
    },
    noOfStudents :{
        type: String,
        trim: true
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
}, {
    timestamps: true
})

const CabinCrewTrainingSession = mongoose.model('CabinCrewTrainingSession', CabinCrewTrainingSessionSchema)

module.exports = CabinCrewTrainingSession