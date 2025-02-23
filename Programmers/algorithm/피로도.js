function solution(k, dungeons) {
    var answer = 0;
    let visited = new Array(dungeons.length).fill(false);
    
    function dfs(k, cnt) {
        answer = Math.max(answer, cnt);
        for(let i = 0; i < dungeons.length; i++) {
            if(!visited[i] && dungeons[i][0] <= k) {
                visited[i] = true;
                dfs(k - dungeons[i][1], cnt + 1);
                visited[i] = false;
            }
        }
    }
    
    dfs(k, 0);
    
    return answer;
}