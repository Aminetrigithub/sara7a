import  { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    minLength: [3, "The name is too short"],
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minLength: [6, "password minimum 6 characters"],
    
  },
  age: {
    type: Number,
    min: [8],
    max: [100],
  },
  verified: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  }
  
},{timestamps:true}
);
 export const userModel =  model('user',userSchema);
 
