console.log(`----------------------------------Synchronous code start---------------------------------`);

for (let index = 0; index < 100; index++) {

    console.log(`Element :- ${index}`);
}

console.log(`Code After the for loop in Synchronous`);

console.log(`-----------------------------------Synchronous code END------------------------------------`);







console.log(`\n\n----------------------------------Asynchronous code start---------------------------------`);
setTimeout(() => {
    for (let index = 0; index < 10; index++) {

        console.log(`Element :- ${index}`);
    }
}, 1000)

console.log(`Code After the for loop in Asynchronous`);
console.log(`-----------------------------------Asynchronous code END------------------------------------`);
