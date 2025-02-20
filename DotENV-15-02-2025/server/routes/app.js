const  express=require("express");
const  app=express();

const  mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017").then(() => {
  console.log("DB sucessfully connected!!!");
});






app.listen(8080,()=>{
    console.log("server is running on port 8080");
})