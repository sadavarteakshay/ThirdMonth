const fs = require('fs');



setTimeout(() => {
    fs.mkdir("document", (err) => {
        if (err) console.log("1. ", err.message);
        else console.log("\n1. document dir is created...")
    });

    setTimeout(() => {
        fs.writeFile("document/data.txt", "Name:-Akshay Sadavarte",
            (err) => {
                if (err) console.log(err.message);
                else console.log("2. data.txt file is created...")
            });

        setTimeout(() => {
            fs.appendFile("document/data.txt", "\nAddress:-Aurangabad, Maharashtra",
                (err) => {
                    if (err) console.log(err.message);
                    else console.log("3. new data is updated on data.txt file  ...")
                });

            setTimeout(() => {
                fs.readFile("document/data.txt", 'utf-8',
                    (err, filedata) => {
                        if (err) console.log(err.message);
                        else console.log("\n4.file data :-\n", filedata,"\n");
                    });

                setTimeout(() => {
                    fs.rename("document/data.txt", "document/newData.txt",
                        (err) => {
                            if (err) console.log(err.message);
                            else console.log("5. file is renamed   data.txt to newData.txt ...");
                        });

                    setTimeout(() => {
                        fs.unlink("document/newData.txt",
                            (err) => {
                                if (err) console.log(err.message);
                                else console.log("6. file is deleted ...");
                            });

                        setTimeout(() => {
                            fs.rmdir("document",
                                (err) => {
                                    if (err) console.log(err.message);
                                    else console.log("7. Dir is deleted ...");
                                });

                        }, 2000)

                    }, 1000)

                }, 2000)

            }, 1000)

        }, 2000)

    }, 2000)

}, 1000)



