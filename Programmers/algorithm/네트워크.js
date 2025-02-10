function solution(n, computers) {
    var answer = 0;
    let check = Array.from({ length: n }, () => 0);
    
    function dfs(index) {
        check[index] = 1;
        for(let i = 0; i < computers[index].length; i++) {
            if (!check[i] && computers[index][i]) {
                dfs(i);
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        if(!check[i]) {
            answer++;
            dfs(i);
        }
    }
    
    return answer;
}