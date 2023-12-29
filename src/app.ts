import "./configs/env"
import express from "express"

const app = express();



app.listen(process.env.SERV_PORT, function(){
    console.log("Server is running on",process.env.SERV_PORT)
})