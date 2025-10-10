function indexOf(arr, str, pos = undefined) {
    if(!pos) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === str) return i
        }
    }
    else{
        if(pos > arr.length) return -1
        if(arr[pos] === str) return pos
    }
    return -1
}

let a = [123, 21, 41, 421, 34]
const b = indexOf(a, 41,2)
console.log(b)