const jwt=require("jsonwebtoken");
const USER=require("../models/userSchema");
const secretKey = process.env.KEY;

//next keyword calls the next process
const authenticate=async(req,res,next)=>{
    try{
        
        const token=req.cookies.Amazonweb;
        if (!token) {
            throw new Error("No token provided");
          }

        const verifyToken=jwt.verify(token,secretKey);
        console.log(verifyToken);

        const rootUser=await USER.findOne({_id:verifyToken._id,"tokens.token":token});
        console.log(rootUser);

        if(!rootUser){
            throw new Error("User not found")
        };
        req.token=token
        req.rootUser=rootUser
        req.userID=rootUser._id

        next();
    }catch(error){
        res.status(401).send({ error: "Unauthorized", message: "No token provided" });

        console.log(error);

    }
}

module.exports=authenticate;