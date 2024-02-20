function solution(name, yearning, photo) {
    var answer = [];
    photo.map((array) => {
        let score = 0;
        name.map((e, i) => {
          if(array.includes(e) === true) {
              score += yearning[i];
          }
        })
        answer.push(score);
    })
    return answer;
}