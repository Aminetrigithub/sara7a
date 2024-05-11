


import mongoose from "mongoose";
export function dbConnection(){
return  mongoose.connect(process.env.DB_CONNECTION)
.then(() => { console.log("DataBase connected ✔") })
.catch((err) => { console.error("DataBase not connected ❓", err) })
}
