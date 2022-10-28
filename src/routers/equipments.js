const express = require('express')
const Equipments = require('../models/equipments')
const SimAdvisoryNotice = require('../models/equipments')
const router = express.Router()

router.post('/addEquipments', (req, res) =>{
    const equipments = new Equipments(req.body)

    equipments.save().then(() => {
        res.status(201).send(equipments)
    }).catch((e) =>{
        res.send(400)
    })
})

router.get('/fetchEquipment/:selectedSimulator', async (req, res) =>{
    const _selectedSim = req.params.selectedSimulator
    try{
        const simAdvisoryNotice = await SimAdvisoryNotice.find({"selectedSimulator" : _selectedSim})
        console.log('Sim Addvisory Notice : '+ _selectedSim)
        res.status(201).send(simAdvisoryNotice)
    }catch(e){
        res.status(500).send()
    }
})

router.get('/equipments',async  (req, res) =>{
    try{
        const equipments = await Equipments.find({}).sort( { createdAt: -1, } )
        res.status(201).send(equipments)
    }catch(e) {
        res.status(500)
    } 
})

router.get('/qtgEquipments',async  (req, res) =>{
    try{
        const equipments = await Equipments.find({$or:[{"simulatorType" : "FTD"},{"simulatorType" : "FFS"}]})
        res.status(201).send(equipments)
    }catch(e) {
        res.status(500)
    } 
})

router.patch('/updateEquipment/:id',async (req, res) =>{
    const updates = Object.keys(req.body)
    try{
    const equipments = await Equipments.findById(req.params.id)
    updates.forEach((update) => equipments[update] = req.body[update])
    await equipments.save()
   
    if(!equipments) {
        return res.status(404).send()
    }
    res.status(200).send(equipments)
}catch (e){
    res.status(400).send(e)
}
})


module.exports = router