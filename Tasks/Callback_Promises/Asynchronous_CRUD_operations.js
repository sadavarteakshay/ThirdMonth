const fs = require('fs');

fs.mkdir("document", (err) => {
    if (err) console.log(err.message)
    else console.log("\n1. document dir is created...")})

console.log("1. document dir is creating....")



fs.writeFile("document/data.txt", "Name:-Akshay Sadavarte",
    (err) => {
        if (err) console.log(err.message)
        else console.log("2. data.txt file is created...")});
        
console.log("\n2. data.txt file is creating...")



fs.appendFile("document/data.txt", "\nAddress:-Aurangabad, Maharashtra",
    (err) =>{ 
         if (err) console.log(err.message)
         else console.log("3. new data is updated on data.txt file  ...") })
console.log("\n3. new data is updating on data.txt file  ...")




/* setTimeout(() => {
    fs.readFile("document/data.txt", 'utf-8',
        (err, filedata) => {
            if (err) console.log(err)
            else console.log("\n4.file data :-\n", filedata)
        });
    console.log("\n4.Reading file data ")
}, 5000) */


fs.readFile("document/data.txt", 'utf-8',
        (err, filedata) => {
            if (err) console.log(err.message)
            else console.log("\n4.file data :-\n", filedata)
        });
    console.log("\n4. Reading file data ")




fs.rename("document/data.txt", "document/newData.txt",
    (err) => {
        if (err) console.log(err.message)
        else console.log("5. file is renamed   data.txt to newData.txt ...")});
console.log("\n5. File is renaming ...")




 fs.unlink("document/newData.txt", 
(err) => {
        if (err) console.log(err.message)
        else console.log("6. file is deleted ...")});
console.log("\n6. File is deleting ...")  


fs.rmdir("document",
(err) => {
    if (err) console.log(err.message)
    else console.log("7. Dir is deleted ...")});
console.log("\n7. Dir is deleting ...")

console.log("\n========================================================================================")




