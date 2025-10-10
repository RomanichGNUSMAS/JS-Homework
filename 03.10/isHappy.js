var isHappy = function(n) {
    let sum = 0;
    while(n > 0){
        let d = n % 10;
        sum += d * d;
        n = Math.floor(n / 10);
    }
    if(sum === 1) return true;
    if(sum === 4) return false;
    return isHappy(sum);
};

console.log(isHappy(19));