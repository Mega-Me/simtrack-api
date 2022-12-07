const express = require('express')
const TrainingSession = require('../models/trainingSession')
const router = express.Router()

router.post('/addTrainingSession', (req, res) =>{
    const trainingSession = new TrainingSession(req.body)

    trainingSession.save().then(() => {
        res.status(201).send(trainingSession)
    }).catch((e) =>{
        res.send(400)
    })
})

router.get('/fetchMaintenanceDefect/:id', (req, res) =>{
    const _id = req.params.id

    DefectDescription.findById(_id).then((defectDescription) => {
        if(!defectDescription) {
            return res.status(404).send()
        }
        res.status(201).send(defectDescription)
    }).catch((e) => {
        res.status(500).send()
    })
})

router.get('/fetchTrainingSessions/:selectedSimulator', async (req, res) =>{
    const _selectedSim = req.params.selectedSimulator
    try{
        const trainingSession = await TrainingSession.find({"selectedSimulator" : _selectedSim})
        console.log('Training : '+ _selectedSim)
        res.status(201).send(trainingSession)
    }catch(e){
        res.status(500)
    }
})

router.patch('/updateTrainingSession/:id',async (req, res) =>{
    try{
        const trainingSession = await TrainingSession.findByIdAndUpdate(req.params.id, req.body , {new : true})

        if(!trainingSession) {
            return res.status(404).send()
        }
        res.status(200).send(trainingSession)
    }catch (e){
        res.status(400).send(e)
    }
})

module.exports = router