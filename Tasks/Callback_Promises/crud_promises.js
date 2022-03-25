const fs = require('fs');


let request = true;
let fetchData = (time, fun) => {


    return new Promise((resolve, reject) => {

        if (request) {
            setTimeout(() => resolve(fun()), time)
        }
        else {
            reject("Error");
        }
    })

}

fetchData(2000, () => {
    fs.mkdir("document", (err) => {
        if (err) console.log("1. ", err.message);
        else console.log("\n1. document dir is created...")
    })
})

    .then(() => {
        return fetchData(2000, () => {
            fs.writeFile("document/data.txt", "Name:-Akshay Sadavarte",
                (err) => {
                    if (err) console.log(err.message);
                    else console.log("2. data.txt file is created...")
                })
        })
    })

    .then(() => {
        return fetchData(2000, () => {
            fs.appendFile("document/data.txt", "\nAddress:-Aurangabad, Maharashtra",
                (err) => {
                    if (err) console.log(err.message);
                    else console.log("3. new data is updated on data.txt file  ...")
                })
        })
    })

    .then(() => {
        return fetchData(2000, () => {
            fs.readFile("document/data.txt", 'utf-8',
                (err, filedata) => {
                    if (err) console.log(err.message);
                    else console.log("\n4.file data :-\n", filedata, "\n");
                })
        })
    })

    .then(() => {
        return fetchData(2000, () => {
            fs.rename("document/data.txt", "document/newData.txt",
                (err) => {
                    if (err) console.log(err.message);
                    else console.log("5. file is renamed   data.txt to newData.txt ...");
                })
        })
    })

    .then(() => {
        return fetchData(2000, () => {
            fs.unlink("document/newData.txt",
                (err) => {
                    if (err) console.log(err.message);
                    else console.log("6. file is deleted ...");
                })
        })
    })

    .then(() => {
        return fetchData(2000, () => {
            fs.rmdir("document",
                (err) => {
                    if (err) console.log(err.message);
                    else console.log("7. Dir is deleted ...");
                });
        })
    })