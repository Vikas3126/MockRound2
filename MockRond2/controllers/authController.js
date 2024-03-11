
const User=require("../models/userModel");

const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");


const register=async(req,res)=>{

    try {
        
        const {name,email,password}=req.body;
        const hashPass=await bcrypt.hash(password,8);
        const user=new User({name,email,password:hashPass});
        await user.save();
        res.status(201).json({mesg:"User registered successfully"});
    } catch (error) {
        console.log(error);
    }

}

const login=async(req,res)=>{

    try {
        const {email,password}=req.body;
        const user=await User.find(email);

        if(!user){
            return res.status(401).json({msg:"Authencatation failed"});
        }
        const passwordValid=await bcrypt.compare(password,user.password);

        if(!passwordValid){
            return res.status(401).json({msg:"Authencatation failed"});
        }
        const token=jwt.sign({userId:user._id},"masai");
        res.status(201).json({token});
    } catch (error) {
        return res.status(401).json({msg:error});
    }
}

module.exports={
    register,login
}