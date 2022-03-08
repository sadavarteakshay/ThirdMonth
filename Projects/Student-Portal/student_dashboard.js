import promptSync from 'prompt-sync';


let prompt = promptSync();


//Student Dashboard
export function studentDashboard(student) {
    let option;
    do {

        console.log(`\n================================ Student Dashboard =================================`);
        student.displayProfile();

        console.log("\n[1] LOGOUT");

        option = prompt(":-");


    } while (option != 1);


}
