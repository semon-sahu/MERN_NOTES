

const http=require("http");
const Collage=require("./collage.js");

http.createServer((req,res)=>{
res.write("<h1>My collage name  is NRI 12</h1>");
    res.write(Collage.MyCollage());
    res.end();

}).listen(8000);



