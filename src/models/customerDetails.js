const mongoose = require('mongoose');

const customerDetailsSchema = mongoose.Schema({
    companyName :{
        type: String
    },
    shortName :{
        type: String,
    },
    companyLogo:{
        data: Buffer,
        contentType: String
    }
})

const CustomerDetails = mongoose.model('CustomerDetails', customerDetailsSchema )

module.exports = CustomerDetails