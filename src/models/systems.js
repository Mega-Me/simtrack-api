const mongoose = require('mongoose')
const systemsSchema = new mongoose.Schema({
    systemName :{
        type: String,
        unique : true,
        trim: true
    }
}, {
    timestamps: true
})

const Systems = mongoose.model('Systems', systemsSchema )

module.exports = Systems