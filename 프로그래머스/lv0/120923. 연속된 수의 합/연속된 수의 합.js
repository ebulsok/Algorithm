function solution(num, total) {
    for(let i = total+num; 1; i--) {
        let sum = 0;
        let answer = [];
        for(let j = 0; j < num; j++) {
            sum  = sum + i - j;
            answer.push(i - j);
        }
        if(sum === total) return answer.sort((a, b) => a - b);
    }
}