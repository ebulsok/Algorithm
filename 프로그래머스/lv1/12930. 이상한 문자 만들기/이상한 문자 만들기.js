function solution(s) {
    let answer = '';
    let i = 0;
    const strArr = s.split('');
    strArr.forEach(el => {
        if(el !== ' ') {
            if(i % 2) answer += el.toLowerCase();
            else answer += el.toUpperCase();
            i++;
        } else {
            answer += ' ';
            i = 0;
        };
    })
    return answer
}