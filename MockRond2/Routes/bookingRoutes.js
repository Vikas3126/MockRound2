const express=require("express");

const router=express.Router();
const authMiddlware=require("../middleware/authMiddlware")

const bookingController=require("../controllers/bookingFlight");


router.post("/",authMiddlware,bookingController.bookFlight);
router.get("/",bookingController.getAllBookingWithUser);
router.patch("/:id",bookingController.updateBooking);
router.delete("/:id",bookingController.deleteBooking);

module.exports=router