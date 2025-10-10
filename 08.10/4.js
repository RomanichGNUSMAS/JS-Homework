function some(arr,fn){
    for(let i=0;i<arr.length;i++){
        if(i in arr) {
            if (fn(arr[i])) {
                return true;
            }
        }
    }
    return false;
}

function foo(val){
    if(val > 3) return true;
    return false;
}

let arr = [5,10,15,20,25,3,4,5];
let result = some(arr,foo)
console.log(result)