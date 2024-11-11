const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String, 
    required: true 
  },
  difficulty: {
    type: String,
    enum: ["easy","medium","hard"],
    default: "easy",
    required: true
  },
  image:{
    type: String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeu7eYLrykHHu4CL9bqRRmLJC3WmCArhOPrVQv09bTrNJ0EboCY5WOVeO360eLEVpI_k&usqp=CAU"
  },
  duration: {
    type: Number,
    required: true
  },
  marksperquestion:{
    type: Number,
    default: 1,
    required: true
  },
  incorectmarksperquestion:{
    type: Number,
    default: 0,
    required: true
  },
  questions: [
    {
    question: { 
      type: String, 
      required: true 
    },
    options: [
      { 
        type: String, 
        required: true 
      }
    ],
    correctOption: { 
      type: String, 
      required: true
     },
     explanation:{
       type: String,
       required: true
     }
  }],
  createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Test = mongoose.model('Test', testSchema);
module.exports = Test;
