import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

import app from "./app.js";

app.listen(process.env.PORT, ()=>{
    console.log(`Server Running On Port ${process.env.PORT}`);
    
})