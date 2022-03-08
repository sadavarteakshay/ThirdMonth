import { Student } from './Student.js';
import { Admin } from './admin.js';
import { adminDashboard } from './admin_dashboard.js';
import { studentDashboard } from './student_Dashboard.js';



//Login function
export function login(username, password, isAdmin = false) {

    let isValidCredentials = false;

    if (isAdmin) {

        Admin.Data.forEach(function (admin) {
            if (admin.username == username && admin.password == password) {
                adminDashboard(admin);
                isValidCredentials = true;
                return;
            }
        })

    }

    else {
        Student.Data.forEach(function (student) {
            if (student.username == username && student.password == password) {
                studentDashboard(student);
                isValidCredentials = true;
                return;
            }
        })

    }

    if (!isValidCredentials) console.log("Username or Password Wrong!!!");


}




