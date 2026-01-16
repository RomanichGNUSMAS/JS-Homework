class iface {
    constructor() {
        if (new.target === iface) {
            throw new TypeError("interface");
        }
    }

    method() {
        throw new Error('Method not implemented');
    }
}

class Higher extends iface {
    constructor(lower) {
        super();
        this.lower = lower;
    }

    method() {
        console.log('hello');
    }
}

class Lower {
}

//bad
class Upper extends iface {
    constructor() {
        super();
        this.lower = new Lower()
    }

    method() {
        console.log('hello');
    }
}