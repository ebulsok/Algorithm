const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]);
    let str = ''
    
    for(let i = 1; i <= n; i++) {
        for(let j = n - i; j < n; j++) {
            str += '*';
        }
        str += '\n';
    }
    console.log(str);
});