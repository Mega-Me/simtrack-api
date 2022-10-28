const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const simTechSchema = new mongoose.Schema({
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
    },
    position : {
        type: String,
        trim: true,
        required: true
    }
}, {
    timestamps: true
})

simTechSchema.statics.findByCredentials = async (id, password) => {
    const simTech = await SimTech.findOne({id})
    if(!simTech) {
        return 'No User'
        //throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, simTech.password)
    if(!isMatch){
        return 'Wrong password'
        //throw new Error('Wrong password')
    }
    return simTech
}

simTechSchema.pre('save', async function (next) {
    const simTech = this
    if(simTech.isModified('password')) {
        simTech.password = await bcrypt.hash(simTech.password, 8 )
    }
    next()
})

const SimTech = mongoose.model('SimTech', simTechSchema )

module.exports = SimTech