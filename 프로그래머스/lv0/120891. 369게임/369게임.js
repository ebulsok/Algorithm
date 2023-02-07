function solution(order) {
    let answer = 0;
    const arr = order.toString().split('');
    arr.forEach(el => {
        if(el === '3' || el === '6' || el === '9') answer++;
    });
    return answer;
}