import bcrypt from 'bcryptjs';
import userModel from '../models/userModel';
export const register =async(req,res)=>{
    const {name, eamil,password}=req.body;
    if(!name || !eamil ||!password){
        return res.json({success:false,message:'Missing Details'
})
    }
    try {
       const existingUser=await userModel.findOne({eamil})
       if(existingUser){
        return res.json({success:false,message:"user already exists"});

       }
     const hashedPassword=await bcrypt.hash(password,10);
     const user =new userModel({name,eamil,password:hashedPassword});
     await user.save();

     const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'}); 
   
     res.cookie('token',token,{
        httpOnly:true,
        secure:process.env.NODE_ENV==='production',
        sameSite:process.env.NODE_ENV==='production' ?
        'none':'strict',
        maxAge:7*24*60*60*1000//7days

     })
    }catch(error){
        res.json({success:false,message:error.message})

    }
}