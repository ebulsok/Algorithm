function solution(i, j, k) {
    let answer = 0;
    for(let l = i; l <= j; l++) {
        const str = l.toString().split('');
        str.forEach(el => {
            if(el == k) answer++;
        })
    }
    return answer;
}