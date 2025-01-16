const http=require("http");
const Employee=require("./employ.js");

http.createServer((req,res)=>{

    // res.write("<h1>Employee Name is John/post -Software developer<h1>"); 
    res.write(Employee.EmpDetails());
    res.write(Employee.EmpSlaery());
    res.write(Employee.EmpExprience());
    res.end();
}).listen(8000);