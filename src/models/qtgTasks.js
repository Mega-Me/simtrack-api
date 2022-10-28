const mongoose = require('mongoose')

const qtgSchema = new mongoose.Schema(
    {
        qtgTestNo : {
            type: String,
        },
        qtgTitle : {
            type: String,
        }
    },
    {
        timestamps: true
    })
const qtgTasksSchema = new mongoose.Schema({
    simulatorName :{
        type: String, 
    },
    qtgQuarter :{
        type: String,
    },
    taskCompleted :{
        type: String,
    },
    tasks : [qtgSchema],
}, {
    timestamps: true
})

qtgTasksSchema.statics.findQuarterlyTask = async (simulatorName, qtgQuarter) => {
    const qtgTask = await QTGTasks.findOne({"simulatorName" : simulatorName, "qtgQuarter" : qtgQuarter})
    if(!qtgTask) {
        return 'No Task'
    }
    return qtgTask
}

const QTGTasks = mongoose.model('QTGTasks', qtgTasksSchema )

module.exports = QTGTasks