


const fs = require("fs");
// this one make new folder 
// it write files 
// This Write thing to folder second data we want to write third is call back function with exception 
//fs.writeFile("message.txt", "Hello Node  you ", (err) => {
  //if (err) throw err;
  //console.log("The file has been saved!");
//});




fs.readFile('./message.txt',"utf8" ,(err, data) => {
  if (err) throw err;
  console.log(data);
});
