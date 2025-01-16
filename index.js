const express=require("express");
const app=express();


app.get("/",(req,res)=>{
    res.send("<h1>This is my home page!!!!</h1>");
})

app.get("/about",(req,res)=>{
    res.send("<h1>This is my about page@@@@</h1>");
})

app.listen(8000,()=>{
    console.log("Listening to the port 8000");
})
