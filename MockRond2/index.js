const bodyParser = require("body-parser");
const express=require("express");
const db=require("./db")
const authRoutes=require("./Routes/authRoutes");
const flightRoutes=require("./Routes/flightRoutes");
const bookingRoutes=require("./Routes/bookingRoutes");
const dashbaordRoutes=require("./Routes/dashboardRoutes")



const app=express();

app.use(bodyParser.json());

app.use("/api/auth",authRoutes);
app.use("/api/flights",flightRoutes)
app.use("/api/booking",bookingRoutes);
app.use("/api/dashboard",dashbaordRoutes);




app.listen(8800,async()=>{
  
   await db;
  console.log("server is running at port 8800")
})