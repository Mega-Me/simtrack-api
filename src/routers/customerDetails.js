const express = require('express')
const CustomerDetails = require('../models/customerDetails')
const router = express.Router()
const multer = require('multer')

const Storage = multer.diskStorage({
    destination:'uploades',
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: Storage
}).single('logos')

router.post('/addCustomer', (req, res) => {
    upload(req, res,(err) => {
        if(err){
            console.log(err)
        }
        else{
            const customerDetails = new CustomerDetails({
                companyName : req.body.companyName,
                shortName : req.body.shortName,
                companyLogo : {
                    data:req.file.filename,
                    contentType: 'image/png'
                }
            })
            customerDetails
            .save()
            .then(() => res.send('Successfully Uploaded'))
            .catch((err) => console.log(err));
        }
    })
})

module.exports = router