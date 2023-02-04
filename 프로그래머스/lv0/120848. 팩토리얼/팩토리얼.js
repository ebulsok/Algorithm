function solution(n) {
    var answer = 0;
    for(let i = 1; i < 12; i++) {
        if(factorial(i) > n) return i - 1;
    }
}

function factorial(num) {
    if(num === 1) return num;
    return num * factorial(num - 1);
}