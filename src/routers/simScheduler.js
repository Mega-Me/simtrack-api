const express = require('express')
const SimScheduler = require('../models/simScheduler')
const router = new express.Router()

router.post('/addSimScheduler', async (req, res) =>{
    const simScheduler = new SimScheduler(req.body)
    try{
        await simScheduler.save()
        res.status(201).send(simScheduler)
    }catch (e) {
        res.status(400).send(e)
    }
})

router.post('/simScheduler/login', async (req, res) => {
    try{
        const simScheduler = await SimScheduler.findByCredentials(req.body.id, req.body.password)
        res.status(200).send(simScheduler)
    }catch (e) {
        res.status(400).send(e)
    } 
})

module.exports = router