const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    //console.log(User.find());
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    //console.log(User.find());
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).send({ error: 'Invalid login credentials' });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.send({ user, token });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getUsers=async (req,res)=>{
  const users = await User.find();
  res.send(users);
};

exports.getUser=async(req,res)=>{
  const user = await User.findById(req.params.id);
  res.send(user);
}

exports.getFulldetails=async (req,res)=>{
  const users = await User.findById(req.params.id).populate({path:'results', select:['score','timeTaken','takenAt'],populate:{path:'testId',select:['duration','title','questions','marksperquestion']}}).populate('tests');
  console.log(users);
  res.send(users);
};

exports.deleteUser = async (req,res)=>{
     const {id}=req.params;
   try{
     const user = await User.findByIdAndDelete(id);
     const users = await User.find();
     res.status(200).send(users);
   }
   catch(error){
     res.status(500).send(error);
   }
}

exports.updateUser = async (req,res)=>{
  const {id}=req.params;
   try{
     const user=await User.findByIdAndUpdate(id,req.body);
     res.status(200).send(user);
   }
   catch(error){
    res.status(500).send(error);
   }
}