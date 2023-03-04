function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => b - a);
    for(let i = 0; i < score.length - m + 1; i += m) {
        answer += m * (Math.min(...(score.slice(i, i+m))));
    }
    return answer;
}