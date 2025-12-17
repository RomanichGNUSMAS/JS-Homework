class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this[Symbol.iterator] = function () {
            const ob = this;
            let i = ob.start;
            return {
                next() {
                    return {
                        value:i, done:i++ > ob.end
                    }
                },
            }
        }
    }
}

let a = new Range(3, 7);

for (let item of a) {
    console.log(item)
}

console.log([...a])