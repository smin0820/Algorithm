const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const s = input[0].split('');
s.sort();

let used = new Array(s.length).fill(false);
let count = 0;

function dfs(current) {
    if(current.length === s.length) {
        count++;
        return;
    }

    for(let i = 0; i < s.length; i++) {
        if(used[i]) continue;
        
        if(i > 0 && s[i] === s[i - 1] && !used[i - 1]) continue;

        if(current.length > 0 && current[current.length - 1] === s[i]) continue;

        used[i] = true;
        current.push(s[i]);
        
        dfs(current);

        used[i] = false;
        current.pop();
    }
}

dfs([]);

console.log(count);