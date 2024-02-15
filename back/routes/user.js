const userRouter=require('express').Router()
const userController=require('../controllers/users')
const { verifyUserToken } = require('../middleware/userToken')
userRouter.post('/register',userController.register)
userRouter.post('/login',userController.login)
userRouter.get('/home',verifyUserToken,userController.home)
module.exports=userRouter