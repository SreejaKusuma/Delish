const express = require("express");
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const authrouter = require('../routes/auth')

const app = express();
app.use(cors());
app.use('/', authrouter)
app.get("/cakeslist", (req, res)=>{
    fs.readFile("../data/cakesInfo.json","utf-8", (err, data)=>{
        if(err){
            console.log(err);
            res.status(500).json({error: "Internal Server Error"})
            return;
        }
        res.status(200).json(data);
    })
})
app.listen(8080, ()=>{console.log("Server running at port 8080")})