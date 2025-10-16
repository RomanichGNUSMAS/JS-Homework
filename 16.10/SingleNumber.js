var SingleNumber = (nums) => {
    let copy = nums.sort()
    for(let i = 0; i < copy.length; i+=2) {
        if(copy[i] !== copy[i + 1]) {
            return copy[i]
        }
    }
}

console.log(SingleNumber([4,1,2,1,2]))