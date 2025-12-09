let ms = 500
function countToFive(n) {
    if (n == 0) return;
    countToFive(n - 1);
    setTimeout(() => console.log(n), ms)
    ms += 500
}

countToFive(5)