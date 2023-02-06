function solution(s) {
    const str = s.split(' ');
    let answer = 0;
    str.forEach((el, i) => {
        if(el !== 'Z') answer += Number(el);
        else answer -= Number(str[i - 1]);
    })
    return answer;
}