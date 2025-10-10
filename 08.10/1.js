function forEach(arr, callback) {
    for (let i = 0, len = arr.length; i < len; i++) {
        console.log(callback(arr[i]));
    }
    return;
}

function foo(arr){
    return arr ** 2
}

let arr = [1, 2, 3, 4, 5];
let result = forEach(arr, foo);
