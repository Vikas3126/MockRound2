const { config } = require("dotenv");
const mongoose=require("mongoose");


require("dotenv").config();

const connection=mongoose.connect(process.env.mongoURL)

module.exports=connection
