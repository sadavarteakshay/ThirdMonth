import { login } from './login.js';
import { adminSignup, signup } from './signup.js';
import promptSync from 'prompt-sync';


let prompt = promptSync();






//Main Dashboard
function mainDashboard() {
    let exit = false;
    do {
        console.log(`\n============================== Home =====================================`);
        console.log("[1] Login");
        console.log("[2] SignUp");
        console.log("[3] Admin Login");
        console.log("[4] Admin SignUp");
        console.log("[5] Exit");
        let option = prompt("Select Option :-");

        switch (+option) {

            case 1:
                console.log(`\n============================== Login ===================================`);
                let username = prompt("Enter username :-");
                let password = prompt("Enter password :-");
                login(username, password);
                break;

            case 2: signup(); break;

            case 3:
                console.log(`\n==============================Admin Login ===================================`);
                let adminUsername = prompt("Enter username :-");
                let adminPassword = prompt("Enter password :-");
                login(adminUsername, adminPassword, true);
                break;


            case 4:
                adminSignup();
                break;


            case 5: exit = true; break;

            default: console.log("Invalid Option");
                break;
        }
    } while (!exit);
}


mainDashboard();