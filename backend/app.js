const express = require("express");
const app=express();

app.use(express.json())

//Route Imports 
const product = require("./routes/productRouter");
const chart =require("./routes/chartRouter")

app.use("/api/v1",product)
app.use("/api/v1",chart)



module.exports= app