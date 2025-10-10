function every(arr, fn) {
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        if(fn(arr[i])) {
            flag = true;
        }
        else{
            flag = false;
            break
        }
    }
    return flag;
}

function foo(val){
    if(val % 2 == 0){
        return true
    }
    return false
}

let arr = [2,4,6,8,10,12]
let result = every(arr, foo)
console.log(result)