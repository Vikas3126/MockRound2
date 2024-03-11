const mongoose=require("mongoose");

const bookingSchema=new mongoose.Schema({
    user : { type: ObjectId, ref: 'User' },
    flight : { type: ObjectId, ref: 'Flight' }
});

const bookingModel=new mongoose.model("Booking",bookingSchema);

module.exports=bookingModel;