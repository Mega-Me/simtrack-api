const express = require('express')
const PMTasks = require('../models/pmTasks')
const router = express.Router()

router.post('/addPMTasks', (req, res) =>{
    const pmTasks = new PMTasks(req.body)

    pmTasks.save().then(() => {
        res.status(201).send(pmTasks)
    }).catch((e) =>{
        res.send(400)
    })
})

router.post('/fetchPMTask/', async (req, res) => {
    try{
        const pmTask = await PMTasks.findWeeklyTask(req.body.simulatorName, req.body.pmWeek)
        if(pmTask == 'No Task'){
            res.status(401).send(pmTask)
            return
        }
        res.status(200).send(pmTask)
    }catch (e) {
        res.status(400).send(e)
    } 
})

router.get('/fetchAllPMTs/:selectedSimulator', async (req, res) =>{
    const _selectedSim = req.params.selectedSimulator
    try{
        const pmTasks = await PMTasks.find({"simulatorName" : _selectedSim})
        console.log('QTG : '+ _selectedSim)
        res.status(201).send(pmTasks)
    }catch(e){
        res.status(500).send()
    }
})

module.exports = router