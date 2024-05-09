import express from "express";
import { dbConnection } from "./databases/dbConnection.js";
import userRouter from "./src/modules/user/user.routes.js";
import messageRouter  from "./src/modules/message/message.routes.js";

const app = express();
const port = 4000;
app.use(express.json());
app.get("/", (req, res) => res.send("Hello World!"));
app.use(userRouter);
app.use("/messages", messageRouter);
dbConnection();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
