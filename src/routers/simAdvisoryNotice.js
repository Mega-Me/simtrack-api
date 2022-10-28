const express = require('express')
const SimAdvisoryNotice = require('../models/simAdvisoryNotice')
const router = express.Router()

router.post('/addSimAdvisoryNotice', (req, res) =>{
    const simAdvisoryNotice = new SimAdvisoryNotice(req.body)

    simAdvisoryNotice.save().then(() => {
        res.status(201).send(simAdvisoryNotice)
    }).catch((e) =>{
        res.send(400)
    })
})

router.get('/fetchSimAdvisoryNotice/:selectedSimulator', async (req, res) =>{
    const _selectedSim = req.params.selectedSimulator
    try{
        const simAdvisoryNotice = await SimAdvisoryNotice.find({"selectedSimulator" : _selectedSim})
        console.log('Sim Addvisory Notice : '+ _selectedSim)
        res.status(201).send(simAdvisoryNotice)
    }catch(e){
        res.status(500).send()
    }
})

router.patch('/updateSimAdvisoryNotice/:id',async (req, res) =>{
    const updates = Object.keys(req.body)

    try{
    const simAdvisoryNotice = await SimAdvisoryNotice.findById(req.params.id)
    updates.forEach((update) => simAdvisoryNotice[update] = req.body[update])
    await simAdvisoryNotice.save()
   
    if(!simAdvisoryNotice) {
        return res.status(404).send()
    }
    res.status(200).send(simAdvisoryNotice)
}catch (e){
    res.status(400).send(e)
}
})


module.exports = router