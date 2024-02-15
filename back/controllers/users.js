const User=require('../models/users')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const secretKey="salim123"
module.exports={
     register : async (req, res) => {
        const {  name, email  ,password } = req.body;
        try 
        {
            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);
    
            // Create a new user in the database
            const newUser = await User.create({ name, email, password: hashedPassword });
    
            if (newUser) {
                return res.status(201).json('User created successfully');
            } else {
                return res.status(404).json('User not created');
            }
        } catch (err) {
            console.error(err);
            return res.status(500).json('Server error');
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
                const token=jwt.sign(
                     {id: d.id} , secretKey, 
                        {expiresIn: "24h"}
                      
                )
                return res.status(200).json(token)
             }
        }catch(err){
            res.status(500).json('server err')
        }
    },
    home:async(req,res)=>{
        try{
            if(!req.id){
                return res.status(404).json('invalid token')
            }
            return res.status(200).json('ok')
        }catch(err){
            res.status(500).json('server error')
        }
    }

}