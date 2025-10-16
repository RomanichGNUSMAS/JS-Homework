var MaxDist = (height) => {
    let maxArea = 0
    let start = 0
    let end = height.length - 1
    while (start < end) {
        const currentWidth = Math.min(height[start], height[end])
        const currentHeight = end - start
        const sum = currentWidth * currentHeight
        maxArea = Math.max(maxArea, sum)
        if(height[start] < height[end]) start++
        else end--
    }
    return maxArea
}

console.log(MaxDist([1,8,6,2,5,4,8,3,7]))