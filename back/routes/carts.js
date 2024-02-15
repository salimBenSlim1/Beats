const cartRouter=require('express').Router()
const cartsController=require('../controllers/carts')
cartRouter.post('/add',cartsController.addCart)
cartRouter.get('/getAll/:id',cartsController.getAllCarts)


module.exports=cartRouter