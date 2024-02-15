const express=require('express')
const cors=require('cors')
const bodyParser = require('body-parser');
const cartRouter=require('./routes/carts')
const db=require('./database/index')
const rl=require('./models/relations')
const userRouter=require('./routes/user')
const app=express()
app.use(bodyParser.json());
app.use(cors())
app.use('/user',userRouter)
app.use('/carts',cartRouter)
app.listen(3000,()=>{
    console.log('listening in 3000')
})