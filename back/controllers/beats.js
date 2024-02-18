const Beat = require('../models/beats')
module.exports={
    getAllBeatsOfOneUser:async(req,res)=>{
        try{
            console.log(req.params.id)
            let d=await Beat.findAll({where:{user_id:req.params.id}})
            if(d) {
                console.log('first')
                return res.status(200).json(d)}
            return res.status(404).json('err')
        }catch(err){
            res.status(500).json('internal server')
        }
    },
    getAllBeats:async(req,res)=>{
        try{
            let d=await Beat.findAll()
            if(d) {
                return res.status(200).json(d)}
            return res.status(404).json('err')
        }catch(err){
            res.status(500).json('internal server')
        }
    },
    addBeat:async(req,res)=>{
        try{
            let j=await Beat.create(req.body)
            if(j) return res.status(200).json('added')
            return res.status(404).json('not created')
        }
        catch(err){
            res.status(500).json('inetrnal server err')
        }
    },
    deleteBeat:async(req,res)=>{
        try{
            let d=Beat.destroy({where:{id:req.params.id}})
            if(d) return res.status(200).json('deleted')
            return res.status(404).json('not deleted')
        }catch(err){
            res.status(500).json('internal server err')
        }
    },
    editBeat:async(req,res)=>{
        try{
            let s =Beat.update(req.body,{where:{id:req.params.id}})
            if(s) return res.status(200).json('updated')
            return res.status(404).json('not updated')
        }catch(err){
            res.status(500).json('internal server err')
        }
    },
    getBeatsBought:async(req,res)=>{
        try{
            let s=await Beat.findAll({where:{user_id:req.params.id}})
            if (s) return res.status(200).json(s)
            return res.status(404).json('err')

        }catch(err){
            res.status(500).json('internal server err')
        }
    },
    // here update the sold to 1 and the user_id
    updateBoughtBeat:async(req,res)=>{
        try{
            let s=await Beat.update(req.body,{where:{id:req.params.id}})
            if (s) return res.status(200).json(s)
            return res.status(404).json('err')
        }catch(err){
            res.status(500).json('internal server err')
        }
    }


}