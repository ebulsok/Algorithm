function solution(n) {
    let answer = 0; 
    for(let i = 1; i <= n; i++) {
        if(i !== 1 | 2 | 3) {
            for(let j = 2; j < i; j++) {
                if(i % j === 0) {
                    answer ++;
                    break;
                }
            }
        }
    }
    return answer;
}