import { Student } from './Student.js';
import { signup } from './signup.js';

import promptSync from 'prompt-sync';



let prompt = promptSync();


//Admin Dashboard
export function adminDashboard(admin) {
    let isAdminLoggedIn = true;
    do {
        console.log(`\n================================ Admin Dashboard =================================`);

        console.log("[1] Show All Students");
        console.log("[2] Create Profile");
        console.log("[3] Delete Profile");

        console.log("[4] Logout");

        let option = prompt("Select Option :-");

        switch (+option) {

            case 1:
                console.log(`\n============================== All Students ===================================`);
                let count = 1;
                Student.Data.forEach(student => {
                    console.log(count++, '| ', student.showProfiles());
                    console.log("----------------------------------------------------------------------------------------------------------");
                });
                break;


            case 2:
                signup();
                break;


            case 3:
                console.log(`\n==============================Delete Profile ===================================`);
                let id = prompt("Enter ID :-");

                let student = Student.getStudentById(id);

                delete Student.Data[Student.Data.indexOf(student)];

                break;



            case 4:
                isAdminLoggedIn = false;
                break;


            default: console.log("Invalid Option");
                break;
        }
    } while (isAdminLoggedIn);
} 
