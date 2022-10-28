const express = require('express')
const AssignedTask = require('../models/assignedTasks')
const router = express.Router()

router.post('/addAssignment', (req, res) =>{
    const assignment = new AssignedTask(req.body)
    assignment.save().then(() => {
        res.status(201).send(assignment)
    }).catch((e) =>{
        res.send(400)
    })
})

router.get('/fetchSimAssignments/:selectedSimulator', async (req, res) =>{
    const _selectedSim = req.params.selectedSimulator
    try{
        const assignment = await AssignedTask.find({"simulatorName" : _selectedSim})
        res.status(201).send(assignment)
    }catch(e) {
        res.status(400).send(e)
    } 
})

router.get('/fetchTechAssignments/:simTechRegNo', async (req, res) =>{
    const _simTechRegNo = req.params.simTechRegNo
    try{
        const assignment = await AssignedTask.find({"assignedTech" : _simTechRegNo})
        res.status(201).send(assignment)
    }catch(e) {
        res.status(400).send(e)
    } 
})

router.get('/allAssignments',async  (req, res) =>{
    try{
        const assignment = await AssignedTask.find({}).sort( { createdAt: -1, } )
        res.status(201).send(assignment)
    }catch(e) {
        res.status(500)
    } 
})


router.post('/allAsignmentsWithSimAndTechFilters',async  (req, res) =>{
    try{
        const assignment = await AssignedTask.find({$and:[{"simulatorName" : req.body.simulatorName},{"assignedTech" : req.body.assignedTech}]})
        res.status(201).send(assignment)
    }catch(e) {
        res.status(500)
    } 
})

router.patch('/updateAssignment/:id',async (req, res) =>{
    const updates = Object.keys(req.body)
    try{
        const assignment = await AssignedTask.findById(req.params.id)
        updates.forEach((update) => assignment[update] = req.body[update])
        await assignment.save()
        if(!assignment) {
            return res.status(404).send()
        }
        res.status(200).send(assignment)
    }catch (e){
        res.status(400).send(e)
    }
})

module.exports = router


