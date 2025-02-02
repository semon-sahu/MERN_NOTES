const express = require("express");
const app = express();
const port=9000;

app.get("/student/home",(req,res)=>{
    res.send("This is student page");
})
app.get("/student/about",(req,res)=>{
    res.send("This is student about page");
})
app.get("/student/dept",(req,res)=>{
    res.send("This is student contact page");
})



app.get("/teacher/home",(req,res)=>{
    res.send("This is teacher page");
});
app.get("/teacher/about",(req,res)=>{
    res.send("This is teacher about page");
});
app.get("/teacher/dept",(req,res)=>{
    res.send("This is teacher contact page");
});

app.listen((post) => {
  console.log(`server is running on port ${port}`);
});



// app.get("/", (req, res) => {
//   res.send("hello we learn MERn stack");
// });

// app.get("/HOME",(req,res)=>{
//     res.send("This is home page")
// });

// app.post("/datasave",(req,res)=>{
//     res.send("data sucefully saved!!!")
// })

