const Contact = require('../models/contact')
const User=require('../models/users')
module.exports={
    getAllContacts:async(req,res)=>{
        try{
            let f= await Contact.findAll({
                include:[{
                    model:User,
                    attributes:['name']}]
                
            })
            if(f) return res.status(200).json(f)
            return res.status(404).json('err')
        }catch(err){
            res.status(500).json('internal server err')
        }
    },
    addContact:async(req,res)=>{
        const {name,email,description}=req.body
        try{
            let d=await Contact.create({name,email,description,user_id:req.params.id})
            if (d) return res.status(200).json(d)
            return res.status(404).json('err')
}
        catch(err){
            res.status(500).json('internal server err')
        }
    }
}