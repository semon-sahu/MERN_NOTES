const fs=require("fs");


//delee file
// fs.unlink("tanu.txt",(err)=>{
//     if(err)throw err;

//     console.log("file deleted");
// })


//rename file  

fs.rename("manya.xls" , "rahul.xls" ,(err) => {
  if (err) throw err;

  console.log("file rename");
});