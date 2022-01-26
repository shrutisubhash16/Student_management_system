import express from "express";
//import getStudents from "../controllers/student.js";
import StudentData from "../models/student.js";
const router = express.Router();

router.get('/',async(req,res)=>{
    try{
        const allStudent = await StudentData.find();
        res.status(200).json(allStudent);
    }
    catch(error){
        res.status(404).json({message : error.message});
    }
});

router.post('/',async (req,res)=>{
    const student = req.body;
    const newStudent = new StudentData(student);

    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(404).json({message : error.message})
    }
});

router.delete('/:id',async (req,res)=>{
    const id  = req.params.id;

    try {
        await StudentData.findByIdAndRemove(id).exec();
        res.send('Successfully deleted');
    } catch (error) {
        res.status(404).json({message : error.message});
        console.log(error);
    }
});

export default router;