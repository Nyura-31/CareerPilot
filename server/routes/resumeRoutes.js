const express=require("express");

const router=express.Router();

const verifyToken=require("../middleware/authMiddleware");


const {
    createResume,
    getResumes,
    updateResume,
    deleteResume
}=require("../controllers/resumeController");



router.post("/",verifyToken,createResume);

router.get("/",verifyToken,getResumes);

router.put("/:id",verifyToken,updateResume);

router.delete("/:id",verifyToken,deleteResume);



module.exports=router;