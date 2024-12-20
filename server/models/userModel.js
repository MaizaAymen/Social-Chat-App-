import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    name:{type:String , required:true },
    eamil:{type: String, required:true, unique:true},
    password:{type:String ,required:true},
    verifyotp:{type:String,default:''},
    verifyotpexpireAt:{type: Number, default:0},
    isAcconuntVerified:{type:Boolean,default:false},
    resetOtp:{type:String,default:''},
    resetOtpExpireAt:{type : Number,default:0    },

})
const userModel = mongoose.models.user || mongoose.model('user',userSchema)


export default userModel; 