function solution(d, budget) {
    d.sort((a, b) => a - b );
    let answer = 0;
    while(budget - d[answer] >= 0) {
        budget -= d[answer];
        answer++;
    }
    return answer;
}