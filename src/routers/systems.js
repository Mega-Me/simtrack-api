const express = require('express')
const Systems = require('../models/systems')
const router = express.Router()

router.post('/addSystems', (req, res) =>{
    const systems = new Systems(req.body)

    systems.save().then(() => {
        res.status(201).send(systems)
    }).catch((e) =>{
        res.send(400)
    })
})


router.get('/systems',async  (req, res) =>{
    try{
        const systems = await Systems.find({}).sort()
        res.status(201).send(systems)
    }catch(e) {
        res.status(500)
    } 
})

module.exports = router