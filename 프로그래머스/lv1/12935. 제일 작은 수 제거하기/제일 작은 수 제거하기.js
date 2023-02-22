function solution(arr) {
    const answer = JSON.parse(JSON.stringify(arr));
    const n = arr.sort((a, b) => a - b).shift();
    answer.splice(answer.indexOf(n), 1);
    if(!answer.length) return [-1];
    return answer;
}