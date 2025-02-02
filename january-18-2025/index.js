//upper case all letters in the capitalform 


const http=require("http");
const uc=require("uppercase");

http.createServer((req,res)=>{
res.write(uc("Hello World"));
res.end();

}).listen(8000);