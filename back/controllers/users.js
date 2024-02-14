const User=require('../models/users')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const secretKey="salim123"
module.exports={
    register:async(req,res)=>{
        const {password,name,email}=req.body
        const hashed=await bcrypt.hash(password,10)
        try{

            let d=await User.create({name,email,password:hashed})
            if(d) return res.status(201).json('created')
            return res.status(404).json('user not created')

        }
        catch(err){
            res.status(500).json('server err')
        }
    
    },
    login:async(req,res)=>{
        const {email,password}=req.body
        
        try{
            let d=await User.findOne({where:{email}})
            if(!d){
                return res.status(404).json('user not found')
            }
             const hashed=await bcrypt.compare(password,d.password)
             if(hashed){
                const token=jwt.sign({
                     id: d.id , secretKey, 
                        expiresIn: "24h"
                      
                })
                return res.status(200).json(token)
             }
        }catch(err){
            res.status(500).json('server err')
        }
    }
}