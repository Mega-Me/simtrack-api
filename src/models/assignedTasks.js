const mongoose = require('mongoose')
const assignedTaskSchema = new mongoose.Schema({
    simulatorName :{
        type: String,
    },
    assignedTask :{
        type: String,
    },
    assignedTaskDetail :{
        type: String,
    },
    assignedTech :{
        type: String,
    },
    assignedBy :{
        type: String,
    },
    actionTaken :{
        type: String,
    },
    assignedTaskStatus :{
        type: String,
    },
    complexity :{
        type: String,
    },
    system :{
        type: String,
    },
    workedWith : [{
        type: String
      }],
}, {
    timestamps: true
})

const AssignedTask = mongoose.model('AssignedTask', assignedTaskSchema )

module.exports = AssignedTask