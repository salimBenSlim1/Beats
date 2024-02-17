const Cart = require('../models/cart')
module.exports={
    addCart:async(req,res)=>{
        try{
            let s = await Cart.create({user_id:req.body.user_id})
            if(s) return res.status(200).json("added")
            return res.status(404).json('err')

        }catch(err){
            res.status(500).json("server err")
        }
    },
    getAllCarts:async(req,res)=>{
        try {
            let r=await Cart.findAll({where:{user_id:req.params.id}
                
            }
                )
            if(r) return res.status(200).json(r)
            return res.status(404).json('not found')
        }catch(err){
            res.status(500).json('server err')
        }
    }
}