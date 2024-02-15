const jwt=require('jsonwebtoken')
const secretKey="salim123"
const verifyUserToken=async(req,res,next)=>{
const token=req.headers[`authorization`].split(" ")[1]
jwt.verify(token,secretKey,(err,user)=>{
    if(err){
        req.id=undefined
    }
    else if(user){
        req.id=user.id
    }
})

 next()


}

module.exports={
    verifyUserToken
}