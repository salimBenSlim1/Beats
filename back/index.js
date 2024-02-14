const express=require('express')
const cors=require('cors')
const db=require('./database/index')
const rl=require('./models/relations')
const app=express()
app.use(cors())
app.listen(3000,()=>{
    console.log('listening in 3000')
})