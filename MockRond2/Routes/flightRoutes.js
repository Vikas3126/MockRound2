const express=require("express");

const router=express.Router();

const flightController=require("../controllers/flightController");
const { route } = require("./authRoutes");

router.get("/",flightController.getAllFlight);
router.get("/:id",flightController.getFlightById);
router.post("/",flightController.addflight);
router.put("/:id",flightController.updateFlight);
router.delete("/:id",flightController.deleteFlight);


module.exports=router;