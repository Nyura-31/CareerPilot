const express=require("express");

const router=express.Router();


const verifyToken=require("../middleware/authMiddleware");


const {
    analyzeResume
}=require("../controllers/aiController");



router.post(
    "/analyze",
    verifyToken,
    analyzeResume
);



module.exports=router;