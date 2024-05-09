


import mongoose from "mongoose";
export function dbConnection(){
return  mongoose.connect("mongodb://127.0.0.1:27017/sara7aDB")
.then(() => { console.log("DataBase connected ✔") })
.catch((err) => { console.error("DataBase not connected ❓", err) })
}
