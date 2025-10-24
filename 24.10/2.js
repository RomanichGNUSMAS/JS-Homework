class BankAccount {
    constructor(owner,number = 0) {
        this.owner = owner;
        this.number = number < 0 ? 0 : number;
    }
    deposit(amount){
        if(amount < 500) {return false}
        this.number += amount;
    }
    withdraw(amount){
        if(this.number < amount) {return false}
        this.number -= amount;
    }
}

let person = new BankAccount("Rom",-150);
console.log(person);
person.deposit(1000);
console.log(person);
person.withdraw(550);
console.log(person);