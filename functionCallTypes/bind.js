Function.prototype.myBind = function (thisArg) {
    if (this != globalThis && typeof this === 'function') {
        let stug = function () { }
        let thisThis = this
        var presets = Array.prototype.slice.call(arguments,1)
        let func = function () {
            return thisThis.apply(this instanceof stug && thisArg ? this : thisArg,presets.concat(Array.prototype.slice.call(arguments)))
        }

        stug.prototype = this.prototype;
        func.prototype = new stug();
        return func;
    }
    else {
        throw new Error('cannot read properties of undefined')
    }
}


function foo() { console.log(this.x) }
let a = foo.myBind({ x: 1 });
a()