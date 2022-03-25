const fs = require('fs');

fs.mkdirSync("document");
console.log("Dir is created...")

fs.writeFileSync("document/data.txt","Name:-Akshay Sadavarte");
console.log("\nfile is created...")

fs.appendFileSync("document/data.txt","\nAddress:-Aurangabad, Maharashtra")
console.log("\nnew data is updated...")

const filedata = fs.readFileSync("document/data.txt",'utf-8');
console.log("\nReading file data :-\n",filedata)

fs.renameSync("document/data.txt","document/newData.txt");
console.log("\nFile is renamed ...")

fs.unlinkSync("document/newData.txt");
console.log("\nFile is deleted ...")

//fs.rmdirSync("document")
//console.log("\nDir is deleted ...")



