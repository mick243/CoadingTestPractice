const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let i = 0;
let n = ['a','e','i','o','u','A','E','I','O','U'];

while(true) {
    let temp = input[i];
    let count = 0;
    i++;
    
    if(temp == '#') break;
    for(let j = 0; j < temp.length; j++) {
        if(n.includes(temp[j])) count++
    }
    
    console.log(count);
}
