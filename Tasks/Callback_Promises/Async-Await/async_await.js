import fetch from 'node-fetch';

async function getAllUsers() {
     
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
        let jsonUsersData = await response.json()

        let usersInfo = getUsersInfo(jsonUsersData);

        return jsonUsersData;

     
   
}

function getUsersInfo(jsonUsersData) {

    return jsonUsersData.map(user =>
        `${user.username} | ${user.name} |${user.email} `);

}


getAllUsers()
.then(users => console.log(users))
.catch(reason => console.log(reason.message))
