function solution(number, limit, power) {
    let answer = 0;
    
    for(let i = 1; i <= number; i++) {
        const n = f(i)
        if(n > limit) answer += power;
        else answer += n;
    }
    return answer;
}

function f(n) {
    let arr = [];
    for(let i = 1; i < Math.sqrt(n); i++) {
        if(n % i === 0) arr.push(i);
    }
    return ((Math.sqrt(n) % 1 === 0) ? arr.length * 2 + 1 : arr.length * 2);
};