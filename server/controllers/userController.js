import userModel from "../models/userModel.js";
import { isAuthenticated } from "./authController.js";


export const getUserData=async(req,res)=>{
    try {
        const {userId}=req.body;
        const user=await userModel.findById(userId)
        if (!user) {
            return res.json({success:false,message:"user not found "})
            
        }
        res.json({success:true,
            userData:{
              name:user.name,
              isAuthenticated:user.isAuthenticated
            }})

        
    } catch (error) {
      return res.json({success:false,message:error.message})
    }
}