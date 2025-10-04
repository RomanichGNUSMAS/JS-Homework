function sum(arr){
    let sum = 0
    for(let i in arr){
        sum += arr[i]
    }
    return sum
}
console.log(sum([1,2,3,4,5]))