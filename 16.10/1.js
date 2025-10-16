const M = 'M'
const matrix = [
    [0,M,0,M,0],
    [0,0,M,0,0],
    [0,0,0,0,0],
    [M,M,0,0,0],
    [0,0,0,M,0]
]

let copy = []
const n = matrix[0].length
for (let x = 0; x < n; x++) {
    copy[x] = new Array(n);
    for (let y = 0; y < n; y++) {
        let count = 0
        if (matrix[x][y] === 'M') {
            copy[x][y] = M
            continue;
        }
            for (let dx = -1; dx <= 1; dx++) {
                for (let dy = -1; dy <= 1; dy++) {

                    if (dx === 0 && dy === 0) continue;
                    const ni = x + dx;
                    const nj = y + dy;

                    if(ni >= 0 && ni < n && nj >= 0 && nj < n) {
                        if(matrix[ni][nj] === M) { count++; }
                    }
                }
            }

        copy[x][y] = count;
    }
}
console.log(copy)