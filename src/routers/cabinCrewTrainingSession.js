const express = require('express')
const CabinCrewTrainingSession = require('../models/cabinCrewTrainingSession')
const router = express.Router()

router.post('/addCabinCrewTrainingSession', (req, res) =>{
    const cabinCrewtrainingSession = new CabinCrewTrainingSession(req.body)

    cabinCrewtrainingSession.save().then(() => {
        res.status(201).send(cabinCrewtrainingSession)
    }).catch((e) =>{
        res.send(400)
    })
})

router.get('/fetchCabinCrewTrainingSessions/:selectedSimulator', async (req, res) =>{
    const _selectedSim = req.params.selectedSimulator
    try{
        const cabinCrewTrainingSession = await CabinCrewTrainingSession.find({"selectedSimulator" : _selectedSim})
        console.log('Training : '+ _selectedSim)
        res.status(201).send(cabinCrewTrainingSession)
    }catch(e){
        res.status(500)
    }
})

router.patch('/updateCabinCrewTrainingSession/:id',async (req, res) =>{
    try{
        const cabinCrewTrainingSession = await CabinCrewTrainingSession.findByIdAndUpdate(req.params.id, req.body , {new : true})

        if(!cabinCrewTrainingSession) {
            return res.status(404).send()
        }
        res.status(200).send(cabinCrewTrainingSession)
    }catch (e){
        res.status(400).send(e)
    }
})


module.exports = router