//file creation module*******


// const fs = require("fs");

// fs.appendFile("manya.pdf", "welcome to the world of pdf", (err) => {
//   if (err) throw err;
//   console.log("file created");
// });


// const fs = require("fs");

// fs.appendFile("manya.docx", "welcome to the world of pdf", (err) => {
//   if (err) throw err;
//   console.log("file created");
// });






//multiple type file


// const fs = require("fs");

// fs.appendFile("manya.xls", "welcome to the world of pdf", (err) => {
//   if (err) throw err;
//   console.log("file created");
// });


//open filees crete
// const fs=require("fs");
// fs.open("ram.docx","w",(err,file)=>{
//     if(err) throw err;

//     console.log("file created");
// })


//write file creatte 


const fs = require("fs");
fs.writeFile("tanu.txt", "my name is tanu", (err,) => {
  if (err) throw err;

  console.log("file created");
});