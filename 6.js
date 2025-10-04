
function includess(arr, item){
    for (let i = 0; i <= arr.length; i++){
        let found = true;
        for(let j = 0; j < item.length; j++){
            if(arr[i + j] != item[j]){
                found = false;
                break;
            }
        }
        if(found){
            return true;
        }
    }
    return false;
}

var arr = "Learning JavaScript"
console.log(includess(arr, 'Java'))