const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const simSchedulerSchema = new mongoose.Schema({
    name : {
        type: String,
        trim: true,
        required: true
    },
    id: {
        type: String,
        unique : true,
        required: true
    },
    password : {
        type: String,
        trim: true,
        required: true
    }
}, {
    timestamps: true
})

simSchedulerSchema.statics.findByCredentials = async (id, password) => {
    const simScheduler = await SimScheduler.findOne({id})
    if(!simScheduler) {
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, simScheduler.password)
    if(!isMatch){
        throw new Error('Unable to login')
    }

    return simScheduler
}

simSchedulerSchema.pre('save', async function (next) {
    const simScheduler = this
    if(simScheduler.isModified('password')) {
        simScheduler.password = await bcrypt.hash(simScheduler.password, 8 )
    }
    next()
})

const SimScheduler = mongoose.model('SimScheduler', simSchedulerSchema )

module.exports = SimScheduler