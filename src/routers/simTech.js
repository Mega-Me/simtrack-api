const express = require('express')
const SimTech = require('../models/simTech')
const router = new express.Router()
const bcrypt = require('bcryptjs')

router.post('/addSimTech', async (req, res) =>{
    const simTech = new SimTech(req.body)
    try{
        await simTech.save()
        res.status(201).send(simTech)
    }catch (e) {
        res.status(400).send(e)
    }
})

router.post('/simTech/login', async (req, res) => {
    try{
        const simTech = await SimTech.findByCredentials(req.body.id, req.body.password)
        if(simTech == 'Wrong password'){
            res.status(401).send(simTech)
            return
        }
        else if(simTech == 'No User'){
            res.status(404).send(simTech)
            return
        }
        res.status(200).send(simTech)
    }catch (e) {
        res.status(400).send(e)
    }
    
})

router.get('/simTechs',async  (req, res) =>{
    try{
        const simTechs = await SimTech.find({})
        res.status(201).send(simTechs)
    }catch(e) {
        res.status(500)
    } 
})

router.get('/simTechsOnly',async  (req, res) =>{
    try{
        const simTechs = await SimTech.find({$or:[{"position" : "A/C Sim Tech IV"},{"position" : "A/C Sim Tech III"},{"position" : "A/C Sim Tech II"},{"position" : "A/C Sim Tech I"}]})
        res.status(201).send(simTechs)
    }catch(e) {
        res.status(500)
    } 
})

router.patch('/simTechs/:id', async (req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'password','position']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid operation'})
    }

    try{
        const simTech = await SimTech.findById(req.params.id)
        updates.forEach((update) => simTech[update] = req.body[update])
        await assignment.save()
        if(!simTech) {
            return res.status(404).send()
        }
        res.status(200).send(assignment)

        //const simTech = await SimTech.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators:true})
        
        // if(!simTech){
        //     return res.status(404).send()
        // }
        // res.send(simTech)
    }catch(e) {
        res.status(400).send(e)
    }
})

module.exports = router