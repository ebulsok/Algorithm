function solution(A, B) {
    let answer = 0;
    if(A === B) return 0;
    
    let arr = A.split('');
    for(let i = 0; i < A.length; i++) {
        const char = arr.pop();
        arr.unshift(char);
        answer++;
        if(arr.join('') === B) return answer;
    }
    return -1;
}