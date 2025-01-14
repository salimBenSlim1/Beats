const beatsRouter=require('express').Router()
const beatsController=require('../controllers/beats')
beatsRouter.get('/getAllBeats',beatsController.getAllBeats)
beatsRouter.get('/getAllBeatsOfOneUser/:id',beatsController.getAllBeatsOfOneUser)
beatsRouter.post('/add',beatsController.addBeat)
beatsRouter.put('/update/:id',beatsController.editBeat)
beatsRouter.delete('/delete/:id',beatsController.deleteBeat)
beatsRouter.put('/updateBought/:id',beatsController.updateBoughtBeat)
beatsRouter.get('/getBought/:id',beatsController.getBeatsBought)






module.exports=beatsRouter