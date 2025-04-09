


const express =require("express");
const  app=express();
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())
// cprse middleware/xml
app.use(cors())




const port=process.env.PORT  || 8000

app.listen(port,()=>{
console.log(`server run on  port :${port}`);
})