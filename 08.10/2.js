function map(arr,fn){
    const result = []
    for(let i = 0;i < arr.length;i++){
        if(fn(arr[i])){
            result.push(arr[i]);
        }
        else result.push(undefined)
    }
    return result;
}

function foo(val){
    if(val >= 10) return true
    return false
}

let arr = [5,10,15,20,25,3,4,5];
let result = map(arr,foo);
console.log(result)