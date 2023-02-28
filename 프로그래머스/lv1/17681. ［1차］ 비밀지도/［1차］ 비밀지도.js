function solution(n, arr1, arr2) {
    let answer = [];
    for(let i = 0; i < n; i++) {
        const bin = (arr1[i] | arr2[i]).toString(2).padStart(n, '0');
        answer.push(String(bin).split('').map(el => {
            if(el === '1') return '#';
            else return ' ';
        }).join(''));
    }
    return answer;
}