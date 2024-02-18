function solution(n, arr1, arr2) {
    var answer = [];
    for(i = 0; i < n; i++) {
        let binNumber = (arr1[i] | arr2[i]).toString(2);
        binNumber = binNumber.padStart(n, '0');
        binNumber = binNumber.replaceAll("1", '#');
        binNumber = binNumber.replaceAll("0", ' ');
        answer.push(binNumber);
    }
    return answer;
}