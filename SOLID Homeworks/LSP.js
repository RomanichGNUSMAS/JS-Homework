//bad
class A {
    constructor() {
    }

    method(name) {
        if (/\d/.test(name)) {
            throw new TypeError('Name invalid');
        }
    }
}

class B extends A {
    method(name, age) {
        if (/^\d+$/.test(this.name) && /^\d+$/.test(name)) {
            throw new Error('Invalid Name and age');
        }
    }
}

//good
class C {
    constructor() {
    }

    method(name) {
        if (/\d/.test(name)) {
            throw new TypeError('Name invalid');
        }
    }
}

class D extends C {
    method(name) {
        if (/\d/.test(name)) {
            throw new TypeError('Name invalid');
        }
    }
}