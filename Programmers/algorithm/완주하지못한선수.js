function solution(participant, completion) {
  const countMap = new Map();

  for (let x of participant) {
    countMap.set(x, (countMap.get(x) || 0) + 1);
  }

  for (let x of completion) {
    countMap.set(x, (countMap.get(x) || 0) - 1);
  }

  for (let [k, v] of countMap) {
    if (v === 1) return k;
  }
}
