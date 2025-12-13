const state = {
    PENDING: "pending",
    FULFILLED: "fulfilled",
    REJECTED: "rejected"
}
function resolvePromise(promise, x, resolve, reject) {
    if (promise === x) return reject(new TypeError('Chaining cycle detected'));

    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        let then;
        let called = false;

        try {
            then = x.then;
        } catch (e) {
            return reject(e);
        }

        if (typeof then === 'function') {
            try {
                then.call(
                    x,
                    (y) => {
                        if (called) return;
                        called = true;
                        resolvePromise(promise, y, resolve, reject);
                    },
                    (r) => {
                        if (called) return;
                        called = true;
                        reject(r); 
                    }
                );
            } catch (e) {
                if (!called) reject(e);
            }
            return;
        }
    }

    resolve(x);
}

class MyPromise {
    constructor(executor) {
        this.state = state.PENDING
        this.value = null
        this.reason = null;

        this.resolveFuncs = [];
        this.rejectFuncs = [];

        const resolve = value => {
            if (this.state != state.PENDING) return;
            this.state = state.FULFILLED;
            this.value = value;
            this.resolveFuncs.forEach(fn => fn());
            this.rejectFuncs = [];
            this.resolveFuncs = []
        }

        const reject = value => {
            if (this.state != state.PENDING) return;
            this.state = state.REJECTED;
            this.reason = value;
            this.rejectFuncs.forEach(fn => fn());
            this.rejectFuncs = [];
            this.resolveFuncs = []
        }

        try {
            executor(resolve, reject);
        } catch (err) { reject(err); }
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function'
            ? onFulfilled
            : v => v;

        onRejected = typeof onRejected === 'function'
            ? onRejected
            : e => { throw e };

        const promise2 = new MyPromise((resolve, reject) => {
            const fulfilledTask = () => {
                queueMicrotask(() => {
                    try {
                        const x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            };

            const rejectedTask = () => {
                queueMicrotask(() => {
                    try {
                        const x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            };

            if (this.state === state.FULFILLED) fulfilledTask();
            else if (this.state === state.REJECTED) rejectedTask();
            else {
                this.resolveFuncs.push(fulfilledTask);
                this.rejectFuncs.push(rejectedTask);
            }
        });

        return promise2;
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

    static resolve(val) {
        return MyPromise((res) => res(val));
    }

    static reject(val) {
        return MyPromise((res, rej) => rej(val));
    }


}

const p = new MyPromise((res, rej) => res(20));

p.then(val => val + 10)
    .then(val => val + 10)
    .then(val => val + 10)
    .then(val => console.log(val))
    .then(() => { throw "some error" })
    .then(() => console.log("hello world"))
    .catch(err => err)
    .then(val => console.log(val))