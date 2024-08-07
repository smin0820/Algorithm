let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

for(let i = 0; i < input.length; i++) {
    let arr = input[i].split(' ').map(Number);
    if(arr[0] === 0) {
        break;
    } else {
        let n = arr[0];
        arr.shift();
        let visited = new Array(n).fill(false);
        let selected = [];
        let answer = '';
        function dfs(depth, start) {
            if(depth === 6) {
                let result = [];
                for(let x of selected) result.push(arr[x]);
                for(let y of result) answer += y + ' ';
                answer += '\n';
                return; 
            }
            for(let i = start; i < arr.length; i++) {
                if(visited[i]) continue;
                selected.push(i);
                visited[i] = true;
                dfs(depth + 1, i + 1);
                selected.pop();
                visited[i] = false;
            }
        }
        dfs(0, 0);
        console.log(answer);
    }
}



