import jwt from "jsonwebtoken";


export const auth = (req,res,next) => { 

let token = req.header("token");
jwt.verify(token, "myNameIsAmine", async(err, decoded) => {
if (err) return res.json({ message: "invalid token", err });  
req.userId = decoded.userId;
console.log(req.sm)

});
next();
 }

