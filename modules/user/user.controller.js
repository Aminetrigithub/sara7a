import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { userModel } from "../../models/user.model.js";

let signUp = async(req, res) => { 
let {name, password, age, email } = req.body;

let user = await userModel.findOne({email});

if(user){return res.json({message: "user already exist"})}

let hash = bcrypt.hashSync(password, 8)
await userModel.insertMany({name, password: hash, age, email })
res.json({message: "user added with success"})
 }

 const signIn = async(req,res) => { 
 let {password, email} = req.body
 let user =  await userModel.findOne({email})
 if(user && bcrypt.compareSync(password, user.password))
{ let token = jwt.sign({UserName: user.name , userId: user.id},'myNameIsAmine')

 return res.json({message:"Success to enter to your profile", token})}

 return res.json({message:"User not found"})

}
export {signUp, signIn}