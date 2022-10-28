const express = require('express')
const QTGTasks = require('../models/qtgTasks')
const router = express.Router()

router.post('/addQTGTasks', (req, res) =>{
    const qtgTasks = new QTGTasks(req.body)
    qtgTasks.save().then(() => {
        res.status(201).send(qtgTasks)
    }).catch((e) =>{
        res.send(400)
    })
})

router.post('/fetchQTGTask/', async (req, res) => {
    try{
        const qtgTask = await QTGTasks.findQuarterlyTask(req.body.simulatorName, req.body.qtgQuarter)
        if(qtgTask == 'No Task'){
            res.status(401).send(qtgTask)
            return
        }
        res.status(200).send(qtgTask)
    }catch (e) {
        res.status(400).send(e)
    } 
})

router.post('/fetchAllQTGTasks/', async (req, res) => {
    try{
        const qtgTask = await QTGTasks.findQuarterlyTask(req.body.simulatorName)
        if(qtgTask == 'No Task'){
            res.status(401).send(qtgTask)
            return
        }
        res.status(200).send(qtgTask)
    }catch (e) {
        res.status(400).send(e)
    } 
})

router.get('/fetchAllQtgs/:selectedSimulator', async (req, res) =>{
    const _selectedSim = req.params.selectedSimulator
    try{
        const qtgTasks = await QTGTasks.find({"simulatorName" : _selectedSim})
        console.log('QTG : '+ _selectedSim)
        res.status(201).send(qtgTasks)
    }catch(e){
        res.status(500).send()
    }
})

module.exports = router