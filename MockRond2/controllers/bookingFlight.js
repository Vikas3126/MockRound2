const Booking=require("../models/bookingModel");
const Flight=require("../models/flightModel");
const User=require("../models/userModel");

const bookFlight=async(req,res)=>{

    try {
       
       const{userId,flightId} =req.body;

       const user=await User.findById(userId);
       const flight=await Flight.findById(flightId);

       if(flight.seates<0){
        return res.status(400).json({mesg:"No seat Available"})
       }

       const booking=await Booking({user:userId,flight:flightId});
       await booking.save();

       flight.seats-=1;
       await flight.save();

       res.status(201).json({mesg:"Flight booked Succesfully"});

    } catch (error) {
        res.status(500).json({error:error});
    }
}



module.exports={
    bookFlight}