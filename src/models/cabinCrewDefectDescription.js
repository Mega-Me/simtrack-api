const mongoose = require('mongoose')

const cabinCrewDefectDescriptionSchema = new mongoose.Schema({
    selectedSimulator :{
        type: String
    },
    instructorName :{
        type: String
    },
    instructorId :{
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

const CabinCrewDefectDescription = mongoose.model('CabinCrewDefectDescription', cabinCrewDefectDescriptionSchema )

module.exports = CabinCrewDefectDescription