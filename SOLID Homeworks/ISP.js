class A {
    constructor() {
        if (new.target === A) {
            throw new Error('interface');
        }
    }

    method1() {
        throw new Error('Method not implemented');
    }

    method2() {
        throw new Error('Method not implemented');
    }
}

//bad
class Printer extends A {
    method1() {
        for (let i = 0; i < 10; i++) {
            console.log(i);
        }
    }

    method2() {
        for (let i = 97; i < 123; i++) {
            console.log(String.fromCharCode(i));
        }
    }
}

new Printer().method2()

//good
class NumberPrinter extends A {
    method1() {
        for (let i = 0; i < 10; i++) {
            console.log(i);
        }
    }
}

class StringPrinter extends A {
    method2() {
        for (let i = 97; i < 123; i++) {
            console.log(String.fromCharCode(i));
        }
    }
}