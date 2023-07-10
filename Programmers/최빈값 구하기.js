let array = [1, 2, 3, 3, 3, 4];
let counting = new Map();

for(let i of array) {
    counting.set(i, (counting.get(i) || 0) + 1);
}
counting = [...counting].sort((a, b) => b[1] - a[1]);
console.log(counting.length === 1 || counting[0][1] > counting[1][1] ? counting[0][0] : -1);