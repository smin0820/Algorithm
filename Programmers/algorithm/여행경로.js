function solution(tickets) {
    var answer = [];
    let visited = Array.from({ length: tickets.length }, () => false);

    function dfs(currentAirport, route) {
        if(tickets.length + 1 === route.length) {
            answer.push(route.slice());
            console.log(route);
            return;
        }
        
        for(let i = 0; i < tickets.length; i++) {
            if(!visited[i] && tickets[i][0] === currentAirport) {
                visited[i] = true;
                route.push(tickets[i][1]);
                dfs(tickets[i][1], route);
                route.pop();
                visited[i] = false;  
            }
        }
    }
    
    dfs('ICN', ['ICN']);
    
    answer.sort();
    return answer[0];
}