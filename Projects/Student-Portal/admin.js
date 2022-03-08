import { User } from './user.js';

export class Admin extends User {

    static Data = new Array();


    constructor(username, password) {

        super(username, password);
    }


    static isUsernameExits(username) {

        let result;
        if (Admin.Data.length) {
            Admin.Data.forEach(admin => {
                if (admin.username == username) {

                    result = true;
                }

            })

        } else result = false;
        return result
    }

}