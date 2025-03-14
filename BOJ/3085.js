const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
let board = input.slice(1).map(line => line.split(""));


let maxCandy = 0;

function getMaxCandy(board) {
    let maxCount = 0;

    for (let i = 0; i < N; i++) {
        let rowCount = 1;
        for (let j = 1; j < N; j++) {
            if (board[i][j] === board[i][j - 1]) {
                rowCount++;
            } else {
                rowCount = 1;
            }
            maxCount = Math.max(maxCount, rowCount);
        }
    }

    for (let j = 0; j < N; j++) {
        let colCount = 1;
        for (let i = 1; i < N; i++) {
            if (board[i][j] === board[i - 1][j]) {
                colCount++;
            } else {
                colCount = 1;
            }
            maxCount = Math.max(maxCount, colCount);
        }
    }

    return maxCount;
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {

        if (j + 1 < N) {
            [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]];
            maxCandy = Math.max(maxCandy, getMaxCandy(board));
            [board[i][j], board[i][j + 1]] = [board[i][j + 1], board[i][j]]; 
        }


        if (i + 1 < N) {
            [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]]; 
            maxCandy = Math.max(maxCandy, getMaxCandy(board));
            [board[i][j], board[i + 1][j]] = [board[i + 1][j], board[i][j]];
        }
    }
}


console.log(maxCandy);