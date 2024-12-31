import userModel from "../models/userModel.js";


export const getUserData=async(req,res)=>{
    try {
        const {userId}=req.body;
        const user=await userModel.findById()
        
    } catch (error) {
      return res.json({success:false,message:error.message})
    }
}