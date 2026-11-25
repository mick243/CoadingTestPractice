const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = +input[0];

let a = input[1];
let result = [];
for(let i = 1; i <= n; i++) {
    for(let j = 0; j < a.length; j++) {
        if(a[j] === input[i][j]) {
            result[j] = a[j];
        } else {
            result[j] = "?";
        }
    }
    a = result;
}

console.log(a.join(""));
