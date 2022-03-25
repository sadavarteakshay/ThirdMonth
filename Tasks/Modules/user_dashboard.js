import {user, accountInfo as userAccount} from "./user.js"
import * as usr from "./user.js"
import {checkBalance,withdraw} from "./account.js"


console.log("Username :",usr.user.username)
console.log("    Name :",user.name)
console.log("   Email :",user.email)

userAccount();
checkBalance();
withdraw(500);