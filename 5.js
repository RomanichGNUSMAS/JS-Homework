let array1 = [1, 2]
let array2 = [3, 4]

function concat(arr1, arr2){
    let arr = []
    for(let i in arr1){
        arr.push(arr1[i])
    }
    for(let i in arr2){
        arr.push(arr2[i])
    }
    return arr
}
console.log(concat(array1,array2))