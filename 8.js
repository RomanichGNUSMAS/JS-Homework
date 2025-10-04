function sum_of_elements(arr) {
    var sum = 0;
    for(var i in arr){
        sum += arr[i];
    }
    return sum;
}
console.log(sum_of_elements([50,75,100]))