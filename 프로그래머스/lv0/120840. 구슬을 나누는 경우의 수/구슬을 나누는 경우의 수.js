function solution(balls, share) {
    return Math.round(factorial(balls) / factorial(balls - share) / factorial(share));
}

function factorial(num) {
    let result = 1;
    for(let i = num; i > 0; i--) result *= i;
    return result;
}