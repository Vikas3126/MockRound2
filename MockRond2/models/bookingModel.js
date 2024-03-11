const mongoose=require("mongoose");

const bookingSchema=new mongoose.Schema({
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    flight : { type: mongoose.Schema.Types.ObjectId, ref: 'Flight' }
});

const bookingModel=new mongoose.model("Booking",bookingSchema);

module.exports=bookingModel;