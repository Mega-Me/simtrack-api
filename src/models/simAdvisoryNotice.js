const mongoose = require('mongoose')
const simAdvisoryNoticeSchema = new mongoose.Schema({
    selectedSimulator :{
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
    defectPlannedClearedDate :{
        type: String
    },
}, {
    timestamps: true
})

const SimAdvisoryNotice = mongoose.model('SimAdvisoryNotice', simAdvisoryNoticeSchema )

module.exports = SimAdvisoryNotice