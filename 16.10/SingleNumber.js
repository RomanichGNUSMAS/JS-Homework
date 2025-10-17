var SingleNumber = (nums) => {
    return nums.reduce((a,c) => a ^ c, 0)
}

console.log(SingleNumber([4,1,2,1,2]))