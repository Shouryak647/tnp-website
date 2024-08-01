const express = require("express");

const app = express();

app.listen(
    5000,
    () => console.log("Backend is running")
)

app.get(
    "/",
    (req,res) =>{
        res.send("Hello World, Welcome to The Backend Part");
    }
)