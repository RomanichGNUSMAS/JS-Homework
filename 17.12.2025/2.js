class User {
    #password
    constructor(name, password) {
        this.#password = Symbol('password');
        this.name = name;
        this[this.#password] = password
    }
    checkPassword(input) {
        if (!(this[this.#password] == input)) {
            return false
        }
        return true;
    }
    changePassword(newPassword) {
        this[this.#password] = newPassword
    }
}

const user = new User('John', 'secret');

console.log(user.checkPassword('secret'));
console.log(user.checkPassword('123'));

console.log(Object.keys(user));