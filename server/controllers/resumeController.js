const Resume = require("../models/resumeModel");


const createResume = (req,res)=>{

    console.log(req.body);

    const data={
        user_id:req.user.id,
        resume_name:req.body.resume_name,
        resume_link:req.body.resume_link,
        version:req.body.version
    };



    Resume.createResume(data,(err,result)=>{

        if(err)
            return res.status(500).json(err);


        res.json({
            message:"Resume added successfully",
            id:result.insertId
        });

    });

};



const getResumes=(req,res)=>{


    Resume.getResumes(req.user.id,(err,result)=>{

        if(err)
            return res.status(500).json(err);


        res.json(result);

    });

};



const updateResume=(req,res)=>{

    Resume.updateResume(
        req.params.id,
        req.body,
        (err,result)=>{

            if(err)
                return res.status(500).json(err);


            res.json({
                message:"Resume updated successfully"
            });

        }
    );

};



const deleteResume=(req,res)=>{


    Resume.deleteResume(
        req.params.id,
        (err,result)=>{

            if(err)
                return res.status(500).json(err);


            res.json({
                message:"Resume deleted successfully"
            });

        }
    );

};



module.exports={
    createResume,
    getResumes,
    updateResume,
    deleteResume
};