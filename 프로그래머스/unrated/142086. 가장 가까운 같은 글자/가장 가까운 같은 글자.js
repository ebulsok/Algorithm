function solution(s) {
    let answer = s.split('').map((el, i) => {
        for(let j = i - 1; j >= 0; j--) {
            if(el === s[j]) return i - j;
        }
        return -1;
    })
    return answer;
}