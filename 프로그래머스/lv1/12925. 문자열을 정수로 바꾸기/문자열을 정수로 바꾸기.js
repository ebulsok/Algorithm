function solution(s) {
    let answer = 0;
    const arr = s.split('').reverse();
    arr.forEach((el, i) => {
        if(el === '-') answer *= -1;
        else if(el === '+') answer *= 1;
        else {
            answer += Math.pow(10, i) * Number(el);
        }
    })
    return answer;
}