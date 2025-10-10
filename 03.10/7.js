function LineSearch(arr,target){
    let start = 0
    let end = arr.length
    while(start <= end){
        if(arr[start] == target) return start
        else if (arr[end] == target) return end
        start++
        end--
    }
    return null
}

console.log(LineSearch([3,6,9,12],9))
