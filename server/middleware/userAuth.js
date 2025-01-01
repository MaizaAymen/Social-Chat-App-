import jwt from 'jsonwebtoken';

const userAuth=async (req,res, next)=>{
    const {token}=req.cookies;
    if (!token){
    return res.json({success:false,message:"not authorized login again "});

    }
    try {
       const tokenDecode=jwt.verify(token,process.env.JWT_SECRET)    
        if(tokenDecode){
           req.body.userId=tokenDecode.id;

        }else{
            return res.json({success:false,message:"not authorized login again"})
        }
        next();
    } catch (error) {
        
    }
}
export default userAuth;

/*4. Authentication of User
We have to authenticate the user whether it is login before or not. 
The jwt token that we generated before store as a form of cookies in the browser of user.
Now if he again go to some other page or again go to that route. 
That tokens help to identify that this user is logged In. 
So for that we add a middleware for that authentication of the token in our file name auth.js*/