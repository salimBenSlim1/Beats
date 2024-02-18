const cartRouter=require('express').Router()
const cartsController=require('../controllers/carts')
cartRouter.post('/add',cartsController.addCart)
cartRouter.get('/get/:id',cartsController.getAllCarts)
cartRouter.delete('/delete',cartsController.deletCartOfUser)


module.exports=cartRouter