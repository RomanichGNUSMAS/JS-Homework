function len(str){
    var count = 0
    for(let i in str){
        count++
    }
    return count
}

var str = "hello"
console.log(len(str));