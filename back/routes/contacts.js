const contactRouter=require('express').Router()
const contactController=require('../controllers/contact')
contactRouter.get('/getAll',contactController.getAllContacts)
contactRouter.post('/add/:id',contactController.addContact)


module.exports=contactRouter