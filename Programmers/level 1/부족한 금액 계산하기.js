function solution(price, money, count) {
    let arr = Array(count).fill(price);
    for(i = 0; i < count; i++) {
        arr[i] *= i + 1;
    }
    var totalPay = arr.reduce((a , b) => a + b) - money;
    return totalPay <= 0 ? 0 : totalPay;
}

console.log(solution(3, 20, 4));
