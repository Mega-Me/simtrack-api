const express = require('express')
const TrainingSchedule = require('../models/trainingSchedule')
const router = express.Router()

router.post('/addTrainingSchedule', (req, res) =>{
    const trainingSchedule = new TrainingSchedule(req.body)

    trainingSchedule.save().then(() => {
        res.status(201).send(trainingSchedule)
    }).catch((e) =>{
        res.send(400)
    })
})

router.get('/fetchSelectedTrainingSchedule/:id', (req, res) =>{
    const _id = req.params.id

    TrainingSchedule.findById(_id).then((trainingSchedule) => {
        if(!trainingSchedule) {
            return res.status(405).send()
        }
        res.status(201).send(trainingSchedule)
    }).catch((e) => {
        res.status(500).send()
    })
})

router.get('/fetchTrainingSchedule/:selectedSimulator', async (req, res) =>{
    const _selectedSim = req.params.selectedSimulator
    try{
        const trainingSchedule = await TrainingSchedule.find({"selectedSimulator" : _selectedSim}).sort( { trainingDate: -1, trainingStartTime : -1 } )
        console.log('Selected Sim : '+ _selectedSim)
        res.status(201).send(trainingSchedule)
    }catch(e){
        res.status(520).send()
    }
})

router.get('/fetchAllTrainingSchedule/', async (req, res) =>{
    try{
        const trainingSchedule = await TrainingSchedule.find()
        res.status(201).send(trainingSchedule)
    }catch(e){
        res.status(502)
        console.log(res)
    }
})

router.patch('/updateTrainingSchedule/:id',async (req, res) =>{
    try{
        const trainingSchedule = await TrainingSchedule.findByIdAndUpdate(req.params.id, req.body , {new : true})

        if(!trainingSchedule) {
            return res.status(404).send()
        }
        res.status(200).send(trainingSchedule)
    }catch (e){
        res.status(400).send(e)
    }
})


module.exports = router