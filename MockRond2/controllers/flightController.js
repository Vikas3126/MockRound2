
const Flight=require("../models/flightModel");

const getAllFlight=async(req,res)=>{

    try {
        const flights=await Flight.find();
        res.status(200).json(flights);
    } catch (error) {
        res.status(500).json({mesg:error});
    }
}

const getFlightById=async(req,res)=>{

    try {
        const flight=await Flight.findById(req.params.id);

        if(!flight){
            return res.status(404).json({mesg:"Flight are not found"});

        }
        res.status(200).json(flight);
    } catch (error) {
        res.status(500).json({error:error});
    }
}

const addflight=async(req,res)=>{
    try {
        const flight=new Flight(req.body);
        await flight.save();
        res.status(201).json({mesg:"Flight added successfully"});

    } catch (error) {
        res.status(500).json({error:error});
    }
}

const updateFlight=async(req,res)=>{

    try {
        await Flight.findByIdAndUpdate(req.params.id,req.body);
        res.status(204).json({mesg:"Flight updated successfully"});
    } catch (error) {
        res.status(500).json({error:error});
    }
}

const deleteFlight=async(req,res)=>{

    try {
       await Flight.findByIdAndDelete(req.params.id);
       res.status(202).json({mesg:"Flight Deleted successfully"});
    } catch (error) {
        res.status(500).json({error:error});
    }
}

module.exports={
    getAllFlight,getFlightById,addflight,updateFlight,deleteFlight
}