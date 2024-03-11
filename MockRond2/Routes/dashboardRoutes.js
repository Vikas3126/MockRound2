const express=require("express");

const router=express.Router();
const authMiddlware=require("../middleware/authMiddlware")

const dashboardController=require("../controllers/dashboardController");

router.get("/",authMiddlware,dashboardController.getAllBookingWithUser);
router.patch("/:id",authMiddlware,dashboardController.updateBooking);
router.delete("/:id",authMiddlware,dashboardController.deleteBooking);

module.exports=router