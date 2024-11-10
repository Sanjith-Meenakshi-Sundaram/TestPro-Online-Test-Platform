const mongoose = require('mongoose');

const resultSchema=new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    testId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Test'
    },
    answers:[
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
               },
              selectedOption:{
                type: String,
                default: ""
              },
             isVisited:{
                type: Boolean,
                required: true
             },
             markforreview:{
              type: Boolean,
              required: true
             }
        }
    ],
    score:{
        type: Number,
        required: true
    },
    timeTaken:{
        type: Number,
        required: true
    },
    takenAt:{
        type: Date,
        default: Date.now
    },
})

const Result= mongoose.model('Result',resultSchema);

module.exports=Result;