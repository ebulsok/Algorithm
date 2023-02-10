function solution(num, k) {
    const answer = num.toString().indexOf(k);
    if(answer !== -1) return answer + 1;
    return answer;
}