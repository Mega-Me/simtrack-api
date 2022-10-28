const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema(
    {
        taskId : {
            type: String,
        },
        taskDescription : {
            type: String,
        },
        taskReference : {
            type: String,
        },
        taskFrequency : {
            type: String,
        }
    },
    {
        timestamps: true
    })
const pmTasksSchema = new mongoose.Schema({
    simulatorName :{
        type: String, 
    },
    pmWeek :{
        type: String,
    },
    taskCompleted :{
        type: String,
    },
    tasks : [taskSchema],
}, {
    timestamps: true
})

pmTasksSchema.statics.findWeeklyTask = async (simulatorName, pmWeek) => {
    const pmTask = await PMTasks.findOne({"simulatorName" : simulatorName, "pmWeek" : pmWeek})
    if(!pmTask) {
        return 'No Task'
    }
    return pmTask
}

const PMTasks = mongoose.model('PMTasks', pmTasksSchema )

module.exports = PMTasks