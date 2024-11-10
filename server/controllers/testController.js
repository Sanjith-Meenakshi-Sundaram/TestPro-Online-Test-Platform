 const Test = require('../models/Test');

 exports.createTest = async (req, res)=>{
     const test=new Test(req.body);
     try{
         await test.save();
         res.status(201).send(test);
     }
     catch(error){
        res.status(500).send(error);
     }
 }

 exports.getallTests = async (req, res)=>{
     try{
        const tests = await Test.find({});
        res.status(200).send(tests);
     }
     catch(error){
        res.status(500).send(error);
     }
 }

 exports.getOneTest = async (req, res)=>{
     try{
        const test = await Test.findById(req.params.id);
        res.status(200).send(test);
     }
     catch(error){
        res.status(500).send(error);
     }
 }

 exports.getSpecificTests = async (req, res)=>{
     try{
        const tests = await Test.find({createdBy:req.params.id});
        res.status(200).send(tests);
     }
     catch(error){
        res.status(500).send(error);
     }
 }

exports.updateTest = async (req, res)=>{
     try{
        const test = await Test.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).send(test);
     }
     catch(error){
        res.status(500).send(error);
     }
 }

 exports.deleteTest = async (req, res)=>{
     try{
        const test = await Test.findByIdAndDelete(req.params.id);
        const tests=await Test.find();
        res.status(200).send(tests);
     }
     catch(error){
        res.status(500).send(error);
     }
 }