function solution(array) {
    let answer = 0;
    let temp = array.join('').split('');
    temp.forEach(el => {
        if(el === '7') answer++;
    })
    return answer;
}