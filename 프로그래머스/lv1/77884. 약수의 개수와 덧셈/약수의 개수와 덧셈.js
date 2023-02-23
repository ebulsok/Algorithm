function solution(left, right) {
    let answer = 0;
    for(let i = left; i <= right; i++) {
        if(f(i)) answer += i;
        else answer -= i;
    }
    return answer;
}

function f(n) {
    let arr = [];
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) arr.push(i);
    }
    return (arr.length % 2 ? 0 : 1);
}