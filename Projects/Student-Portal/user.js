


export class User {
    static count = 1;
    #id
    #username
    #password
    #name

    constructor(username, password, name) {
        this.#id = User.count++;
        this.#username = username;
        this.#password = password;
        this.#name = name;
        this._createdDate = new Date().toLocaleDateString();
    }


    get id() { return this.#id };

    get name() { return this.#name };

    get username() { return this.#username };

    get password() { return this.#password };


}