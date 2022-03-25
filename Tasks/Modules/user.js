
import { bank_name,bank_branch,account } from "./account.js"

export let user={
    username:"akshay",
    name : "Akshay Sadavarte",
    email:"sadavarteakshay@gmail.com"
}

export function accountInfo(){

    console.log(`\n       Bank : ${bank_name}
    Branch : ${bank_branch}
    Account :${account}`)
}
