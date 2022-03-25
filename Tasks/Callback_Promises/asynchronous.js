
let student = {

    name:"Akshay",
    div:"A",
    class:"10th",
    school:"Swami Vivekanand School"
}

console.log(`----------------------------------Synchronous code start---------------------------------`);
console.log(`\nName :- ${student.name}`);
console.log(`Class :- ${student.class}`);
console.log(`Div :- ${student.div}`);
console.log(`School :- ${student.school}`);
console.log(`-----------------------------------Synchronous code END------------------------------------`);

 





console.log(`\n\n----------------------------------Asynchronous code start---------------------------------`);

setTimeout(()=>console.log(`\nName :- ${student.name}`),2000)
setTimeout(()=>console.log(`Class :- ${student.class}`),1000)
setTimeout(()=>console.log(`Div :- ${student.div}`),3000)
setTimeout(()=>console.log(`School :- ${student.school}`),1000)
 
console.log(`-----------------------------------Asynchronous code END------------------------------------`);
