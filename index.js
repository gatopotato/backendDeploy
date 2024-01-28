const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const arnav = [
    {
        name: "Arnav",
        age: 21,
        },
        {
            name: "Arnav",
            age: 21,
            },
            {
                name: "Arnav",
                age: 21,
                }
]

app.get("/",(req,res)=>{
    res.json(arnav);
});

app.listen(port,()=>{
    console.log(`server open at http://localhost:${port}/`);
});