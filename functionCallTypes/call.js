Function.prototype.myCall = function (thisArg, ...anyArg) {
    const uniqueID = Symbol();
    if (!thisArg) thisArg = globalThis
    else thisArg = Object(thisArg)
    thisArg[uniqueID] = this;
    let smth  = thisArg[uniqueID](...anyArg)
    delete thisArg[uniqueID];
    return smth
}

function foo(a,b) {
    console.log(this.x, this.y,a,b);
}
foo.call({x:15,y:20},155,175)