const mongoose = require('mongoose')

const TrainingScheduleSchema = new mongoose.Schema({
    selectedSimulator : {
        type: String
    },
    trainingDate : {
        type: String
    },
    trainingDateName : {
        type: String
    },
    trainingStartTime: {
        type: String
    },
    trainingEndTime: {
        type: String
    },
    instructorName: {
        type: String
    },
    traineeName1: {
        type: String
    },
    traineeName2: {
        type: String
    },
    traineeName3:{
        type: String
    },
    trainingType:{
        type: String
    },
    trainingLesson: {
        type: String
    }
}, {
    timestamps: true
})

const TrainingSchedule = mongoose.model('TrainingSchedule', TrainingScheduleSchema)

module.exports = TrainingSchedule