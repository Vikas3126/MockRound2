const Booking=require("../models/bookingModel");
const Flight=require("../models/flightModel");
const User=require("../models/userModel");



const getAllBookingWithUser=async(req,res)=>{

    try {
        const bookings=await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({mesg:error});
    }
}

const updateBooking=async(req,res)=>{

    try {
        
        const {flightId}=req.body;
        const booking=await Booking.findById(req.params.id);

        if(!booking){
            res.status(404).json({mesg:"Booking not found"});
        }

        booking.flight=flightId
        await booking.save();

    } catch (error) {
        res.status(500).json({mesg:error});
    }
}

const deleteBooking=async(req,res)=>{

    try {
        const booking=await Booking.findById(req.params.id);

        if(!booking){
            res.status(404).json({mesg:"booking not Found"});
        }

        const flight=await Flight.findById(booking.flight);
        flight.seates+=1;

        await flight.save();
        await Booking.findByIdAndDelete(req.params.id);
        res.status(202).json({mesg:"Booking Deleted Succesfully"});

    } catch (error) {
        res.status(500).json({mesg:error});
    }
}

module.exports={
   getAllBookingWithUser,updateBooking,deleteBooking
}