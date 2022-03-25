
let student = {

    name: "Akshay",
    div: "A",
    class: "10th",
    school: "Swami Vivekanand School"
}


let request = true;
let fetchData = (fun,time) => {


    return new Promise((resolve, reject) => {

        if (request) {
            setTimeout(()=>resolve(fun()),time);
           

        }
        else {
            reject("Error");
        }
    })

}

  fetchData(()=>console.log(`\nName :- ${student.name}`),2000)
    .then(()=>{return fetchData(()=>console.log(`Class :- ${student.class}`),1000)})
    .then(()=>{return fetchData(()=>console.log(`Div :- ${student.div}`),3000)})
    .then(()=>{return fetchData(()=>console.log(`School :- ${student.school}`),1000)})
    .catch((err)=>console.log(err)) 
     
    