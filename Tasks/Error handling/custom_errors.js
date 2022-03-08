class InvalidUsernameError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidUsernameError";
    }
}


function createProfile(username, name) {

    if (username.length <= 4) throw new InvalidUsernameError("username must be at least 5 characters long")

     console.log(`${name} Your Profile Created `);
}

try {

    createProfile("Abca", "Akshay");
}
catch (error) {
    console.log(error.message);
}