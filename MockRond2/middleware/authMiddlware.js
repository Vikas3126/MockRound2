const { config } = require("dotenv");
const jwt=require("jsonwebtoken");

const auth=(req,res,next)=>{

    const token=req.headers.autorization;

    if(!token){
        return res.status(401).json({mesg:"Unauthorized"});
    }
    try {
        
        const decoded=jwt.verify(token,"masai");
        req.userData=decoded;
        next();
    } catch (error) {
        return res.status(401).json({mesg:"Unauthrized"});
    }
}

module.exports={auth};

