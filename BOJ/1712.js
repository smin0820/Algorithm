const fs = require('fs');
const [fixedCost, productionCost, oneCost] = fs.readFileSync('./input.txt').toString().split(' ');

const BEP = oneCost - productionCost;
const count = Math.floor(fixedCost / BEP) + 1;

console.log(BEP <= 0 ? -1 : count);