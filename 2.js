function toUp(str){
    var res = ''
    for (let i in str){
        let char = str[i]
        if(str[i] >= 'a' && str[i] <= 'z'){
            let ind = str.charCodeAt(i)
            ind -= 32
            char = String.fromCharCode(ind)
        }
        res += char
    }
    return res
}

var str = "hello"
console.log(toUp(str));