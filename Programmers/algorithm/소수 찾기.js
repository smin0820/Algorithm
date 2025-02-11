function solution(numbers) {
    let nums = numbers.split('');
    let primeSet = new Set();
    let visited = new Array(nums.length).fill(false);
    
    function getCombinations(prefix, visited) {
        if(prefix !== '') {
            const num = Number(prefix);
            if(isPrime(num)) {
                primeSet.add(num);
            }
        }
        
        for(let i = 0; i < nums.length; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            getCombinations(prefix + nums[i], visited);
            visited[i] = false;
        }
    }
    
    getCombinations('', visited);
    
    return primeSet.size;
}

function isPrime(n) {
    if(n < 2) return false;
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}