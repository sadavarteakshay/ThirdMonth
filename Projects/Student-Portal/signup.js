import { Student } from './Student.js';
import promptSync from 'prompt-sync';
import { Admin } from './admin.js';


let prompt = promptSync();






//singup function
export function signup() {
    console.log(`\n============================= Student Signup ====================================`);

    let username;
    let password;


    do {


        username = prompt("Enter Userame :-");
        password = prompt("Enter password :-");

    } while (!isCredentialsValid(username, password));



    let name = prompt("Enter Name :-");
    let _class = prompt("Enter Class :-");

    Student.Data.push(new Student(username, password, name, _class));

    console.log("Profile Created");

}






export function adminSignup() {

    console.log(`\n============================= Admin Signup ====================================`);

    let username;
    let password;

    do {

        username = prompt("Enter Userame :-");
        password = prompt("Enter password :-");

    } while (!isCredentialsValid(username, password, true));


    Admin.Data.push(new Admin(username, password));


}





function isCredentialsValid(username, password, isAdmin = false) {
    let result;
    username = username.trim();
    password = password.trim();

    if (username.length < 4 || !username.match(/^[a-zA-Z\-]{4,10}$/)) {
        console.log("Invalid Username !!!\n")
        return result = false;
    }

    if (isAdmin && Admin.isUsernameExits(username)) {
        console.log("Username not available !!!\n")
        return result = false;
    }

    else if (Student.isUsernameExits(username)) {
        console.log("Username not available !!!\n")
        return result = false;
    }

    else if (!password.match(/^[a-zA-Z0-9!@#$%^&*]{3,16}$/)) {
        console.log("Invalid Password !!!\n")
        return result = false;
    }

    else return result = true;

}