
const Roman = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
}
var romanToInt = function(s) {
    let copy = s.split('')
    let sum = 0
    let i = copy.length - 1
    while (i >= 0) {
        if(Roman[copy[i]] > Roman[copy[i-1]] && i > 0) {
            sum += Roman[copy[i]] - Roman[copy[i-1]];
            i-=2
            continue;
        }
        sum += Roman[copy[i--]]
    }
    return sum;
};

console.log(romanToInt("MCMXCIV"));