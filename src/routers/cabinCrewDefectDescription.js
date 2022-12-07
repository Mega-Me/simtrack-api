const express = require('express')
const DefectDescription = require('../models/cabinCrewDefectDescription')
const router = express.Router()

router.post('/addCabinCrewMaintenanceDefect', (req, res) =>{
    const defectDescription = new DefectDescription(req.body)

    defectDescription.save().then(() => {
        res.status(201).send(defectDescription)
    }).catch((e) =>{
        res.send(400)
    })
})

router.get('/fetchCabinCrewMaintenanceDefect/:id', (req, res) =>{
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

router.get('/fetchCabinCrewMaintenanceDefects/:selectedSimulator', async (req, res) =>{
    const _selectedSim = req.params.selectedSimulator
    try{
        const defectDescription = await DefectDescription.find({"selectedSimulator" : _selectedSim})
        console.log('Maintainance : '+ _selectedSim)
        res.status(201).send(defectDescription)
    }catch(e){
        res.status(500).send()
    }
})

router.get('/fetchOpenCabinCrewMaintenanceDefects/:selectedSimulator', async (req, res) =>{
    const _selectedSim = req.params.selectedSimulator
    try{
        const defectDescription = await DefectDescription.find({"selectedSimulator" : _selectedSim, "action" : ""})
        console.log('Maintainance : '+ _selectedSim)
        res.status(201).send(defectDescription)
    }catch(e){
        res.status(500).send()
    }
})

router.get('/fetchClosedCabinCrewMaintenanceDefects/:selectedSimulator', async (req, res) =>{
    const _selectedSim = req.params.selectedSimulator
    try{
        const defectDescription = await DefectDescription.find({"selectedSimulator" : _selectedSim, "action" : { $gt: "" }})
        console.log('Maintainance : '+ _selectedSim)
        res.status(201).send(defectDescription)
    }catch(e){
        res.status(500).send()
    }
})

router.patch('/updateCabinCrewMaintenanceDefect/:id',async (req, res) =>{
        const updates = Object.keys(req.body)

        try{
        
        const defectDescription = await DefectDescription.findById(req.params.id)

        updates.forEach((update) => defectDescription[update] = req.body[update])
        await defectDescription.save()
       

        if(!defectDescription) {
            return res.status(404).send()
        }
        res.status(200).send(defectDescription)
    }catch (e){
        res.status(400).send(e)
    }
})


module.exports = router