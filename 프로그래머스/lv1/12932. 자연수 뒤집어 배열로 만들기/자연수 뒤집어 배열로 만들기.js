function solution(n) {
    let answer = [];
    const arr = String(n).split('').reverse();
    for(let i = 0; i < arr.length; i++) {
        answer.push(Number(arr[i]));
    }
    return answer;
}