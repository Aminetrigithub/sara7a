import express from "express";
import { dbConnection } from "./databases/dbConnection.js";
import userRouter from "./src/modules/user/user.routes.js";
import messageRouter  from "./src/modules/message/message.routes.js";
import dotenv from "dotenv"
import { userModel } from "./src/models/user.model.js";



const app = express();
const port = 3000;
dotenv.config();
app.use(express.json());
app.get("/", (req, res) => res.send("Hello World!"));
app.use(userRouter);
app.use("/messages", messageRouter);
app.get("/verify/:token", async(req,res) => {

await userModel.findOneAndUpdate({email: req.params.email},{verified: true})
  res.json('Your Email is verified. Thank you 🎁 ')

} )
dbConnection();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
