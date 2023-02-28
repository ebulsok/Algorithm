function solution(a, b, n) {
    let answer = 0;
    while(n >= a) {
        const num = Math.floor(n / a);
        n -= a * num;
        n += b * num;
        answer += b * num;
    }
    return answer;
}