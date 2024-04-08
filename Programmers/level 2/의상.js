function solution(clothes) {
    var answer = 1;
    let types = {};
    clothes.forEach((e) => {
        (types[e[1]] = (types[e[1]] || 0 ) + 1);
    })
    for (const key in types) {
        answer *= types[key] + 1;
    }
    return answer - 1;
}