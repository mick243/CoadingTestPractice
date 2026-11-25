const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);

const n = Number(input[0]);
const m = input.slice(1,7).map(Number);

if (n === 1) {
    const sum = m.reduce((acc, cur) => acc + cur, 0);
    const a = Math.max(...m);
    console.log(sum - a);
} else {
    const b = [
        Math.min(m[0], m[5]),
        Math.min(m[1], m[4]),
        Math.min(m[2], m[3])    
    ].sort((a,b) => a - b);
    
    const min1 = b[0];
    const min2 = b[0] + b[1];
    const min3 = b[0] + b[1] + b[2];
    
    const count1 = 4;
    const count2 = 8 * n -12;
    const count3 = 5 * n * n - 16 * n +12;
    
    const result = count1 * min3 + count2 * min2 + count3 * min1;
    console.log(result);
}
