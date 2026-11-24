const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = input.shift();

const result = input.map(v => {
    const [a,b] = v.split(' ');
    
    let x = 1;
    for(let j = 0; j < b; j++) {
        x = (x * a) % 10;
    }
    
    return x === 0 ? 10 : x;
});

console.log(result.join('\n'));
