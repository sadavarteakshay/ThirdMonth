import {user, bank_name, bank_branch as branch, account} from "./adminHelper.js"


console.log(`\nUser Details :-     
Username : ${user.username}
Name     : ${user.name}
Email    : ${user.email}
Bank     : ${bank_name}
Branch   : ${branch}
Account  : ${account}`)