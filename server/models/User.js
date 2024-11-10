const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { 
    type: String,
    required: true,
    unique: true 
  },
  email: {
    type:String, 
    required: true, 
    unique: true
  },
  password: { 
    type: String, 
    required: true 
  },
  role:{
    type: String,
    enum: ["admin","teacher","student"],
    default: "student",
  },
  profileImg:{
      type: String,
      default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  },
  tests:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Test'
      }
  ],
  results:[
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Result'
    }
  ]
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
