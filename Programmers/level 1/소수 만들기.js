function solution(nums) {
    var answer = 0;
    for(i = 0; i < nums.length; i++) {
        for(j = i + 1; j < nums.length; j++) {
            for(k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                if(sosu(sum)) {
                    answer += 1;
                }
            }
        }
    }
    
    return answer;
}

function sosu(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return true;
}