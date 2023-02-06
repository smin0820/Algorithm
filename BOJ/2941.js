const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function result(input) {
    for (let a of croatia) {
        input = input.split(a).join(" ");
    }

    return input.length;
}

console.log(result(input));