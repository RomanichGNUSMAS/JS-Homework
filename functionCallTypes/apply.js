Function.prototype.myApply = function (thisArg, anyArg) {
    if (typeof this !== 'function') {
        throw new TypeError('myApply must be called on a function');
    }
    if (!Array.isArray(anyArg) && anyArg != null) {
        throw new Error('Apply method at second argument must take a Array')
    }
    const uniqueID = Symbol();
    if (!thisArg) thisArg = globalThis;
    else thisArg = Object(thisArg)
    thisArg[uniqueID] = this
    let smth = thisArg[uniqueID](...anyArg);
    delete thisArg[uniqueID]
    return smth
}

function foo(a,b) {
    console.log(a,b)
}
foo.myApply(null,[10,20])