
function is_contains(arr, el) {
    for (let i = 0; i <= arr.length - el.length; i++) {
        let found = true;
        for (let j = 0; j < el.length; j++) {
            if (arr[i + j] !== el[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return true;
        }
    }
    return false;
}
console.log(is_contains("Learning JavaScript", "Java"))