const Beat = require('../models/beats')
const User = require('../models/users')
const Wish=require('../models/wishlist')
module.exports={
    getWishlistOfUser:async(req,res)=>{
        try{
            let o=await Wish.findAll(
                {include:{model:Beat}, where: { user_id: req.params.id } })
            
           
              if(o)  return res.status(200).json(o)
            return res.status(404).json('err')

        }catch(err){
            res.status(500).json('internal server err')
        }
    },
    // here you have to add the user_id and the beat_id
    addToWishlist:async(req,res)=>{
        try{
            let d=await Wish.create(req.body)
            if(d) return res.status(200).json('added')
            return res.status(404).json('err')

        }catch(err){
            res.status(500).json('internal server err')
        }
    }
}