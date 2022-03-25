let student = {

    name: "Akshay",
    div: "A",
    class: "10th",
    school: "Swami Vivekanand School"
}


setTimeout(() => {
    console.log(`\nName :- ${student.name}`)
    setTimeout(() => {
        console.log(`Class :- ${student.class}`)
        setTimeout(() => {
            console.log(`Div :- ${student.div}`)
            setTimeout(() => {
                console.log(`School :- ${student.school}`)
            }, 1000)
        }, 3000)
    }, 1000)
}, 2000)

console.log("\nAnother code")


