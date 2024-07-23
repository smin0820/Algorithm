function lowerBound(arr, target, start, end) {
	while(start < end) {
		let mid = parseInt((start + end) / 2);
		if(arr[mid] >= target) {
			end = mid;
		} else {
			start = mid + 1;
		}
	}
	return end;
}

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number); 
arr.reverse();

let lis = [0];

for(let x of arr) {
    if(lis[lis.length - 1] < x) {
        lis.push(x);
    } else {
        let index = lowerBound(lis, x, 0, lis.length);
        lis[index] = x;
    }
}

console.log(n - (lis.length - 1));
