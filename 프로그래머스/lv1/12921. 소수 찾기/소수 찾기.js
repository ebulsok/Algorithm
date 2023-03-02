function solution(n) {
    let answer = 1;
    for(let i = n; i > 2; i--) {
        if(i % 2 === 0) continue;
        if(isPrime(i)) answer++;
    }
    return answer;
}

function isPrime(n) {
    for(let i = 3; i <= Math.sqrt(n); i += 2) {
        if(n % i === 0) return false;
    }
    return true;
}