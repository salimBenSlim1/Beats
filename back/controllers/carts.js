const { and } = require('sequelize')
const Beat = require('../models/beats')
const Cart = require('../models/cart')
module.exports={
    // here you have to add beat_id and user_id
    addCart:async(req,res)=>{
        try{
            let s = await Cart.create(req.body)
            if(s) return res.status(200).json("added")
            return res.status(404).json('err')

        }catch(err){
            res.status(500).json("server err")
        }
    },
    getAllCarts:async(req,res)=>{
        try {
            let r=await Cart.findAll({
                include:{
                    model:Beat
                }
            },
                
                {where:{user_id:req.params.id}
                
            }
                )
            if(r) return res.status(200).json(r)
            return res.status(404).json('not found')
        }catch(err){
            res.status(500).json('server err')
        }
    },
    deletCartOfUser:async(req,res)=>{
        try{
            let s=await Cart.destroy({where:{user_id:req.body.user_id,beat_id:req.body.beat_id}})
            if (s ) return res.status(200).json('deleted')
            return res.status(404).json('not deleted')
        }catch(err){
            res.status(500).json('internal server err')
        }
    }
}