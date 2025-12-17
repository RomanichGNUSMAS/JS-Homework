class Collection {
    get [Symbol.toStringTag]() {
       return 'Collection'
    }
}

console.log(Object.prototype.toString.call(new Collection()))