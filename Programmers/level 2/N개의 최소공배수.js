function solution(arr) {
    var answer = 0;
    let value = arr[0]
    for(i = 1; i < arr.length; i++) {
        value = lcm(value, arr[i]);
    }
    answer = value;
    return answer;
}

// 최대공약수
function gcd(a, b) {
    let gcd = 1;
    for(let i = 2; i <= Math.min(a, b); i++){
      if(a % i === 0 && b % i === 0) {
          gcd = i;
      }
    }  
  return gcd;
}

// 최소공배수
function lcm(a, b) {
    return a * b / gcd(a, b);
}