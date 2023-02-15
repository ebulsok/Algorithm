function solution(n) {
    let answer = 1;
    for(let i = 2; i <= n; i++) {
        answer++;
        if(answer % 3 === 0 || (answer.toString().includes('3'))) answer = three(answer);
    }
    return answer;
}

function three(n) {
    if(n % 3 === 0 || (n.toString().includes('3'))) return three(n+1);
    return n
}