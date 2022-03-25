

let bank_name = "SBI";
let bank_branch = "Aurangabad";
let account = "601452312512";
let balance = 100000;


export function withdraw(amount) {
    console.log("\n--------------- Withdraw Function---------------- "  )
    if (balance > amount) {
        balance-=amount;
        console.log(`${amount} Successfully Withdraw
    Balance is : ${balance}`);
    }
}


export function checkBalance() {

    console.log("\nAvailable Balance :" + balance)
}


export { bank_name, bank_branch, account };