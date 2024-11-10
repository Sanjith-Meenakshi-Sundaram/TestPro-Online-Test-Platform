const Result = require("../models/Result");
const User = require("../models/User");

exports.createResult = async (req,res)=>{
    try{
        const result=new Result(req.body);
        await result.save();
        res.status(201).send(result);
    }
    catch(error){
        res.status(500).send(error);
    }
}

exports.getuserResults = async (req,res)=>{
    try{
        const results = await Result.findMany({UserId:req.params.id});
        res.status(200).send(results);
    }
    catch(error){
        res.status(500).send(error);
    }
}

exports.getOneResult = async (req, res)=>{
    try{
        const result = await Result.findById(req.params.id);
        res.status(200).send(result);
    }
    catch(error){
        res.status(500).send(error);
    }
}