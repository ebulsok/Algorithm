function solution(n) {
    let answer = [];
    for(let i = 2; i <= n; i++) {
        if(i === 2 && n % 2 === 0) answer.push(i);
        for(let j = i-1; j > 1; j--) {
            if(i % j === 0) break;
            if(j === 2 && n % i === 0) answer.push(i);
        }
    }
    return answer;
}