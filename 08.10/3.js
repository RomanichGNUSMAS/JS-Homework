function filter(arr,fn){
    const result = []
    for(let i = 0;i < arr.length;i++){
        if(fn(arr[i])){
            result.push(arr[i]);
        }
    }
    return result
}
function foo(val){
    if(val >= 12) return true
    return false
}

let arr = [1,25,12,10,8,5,4]
let result = filter(arr, foo);
console.log(result)