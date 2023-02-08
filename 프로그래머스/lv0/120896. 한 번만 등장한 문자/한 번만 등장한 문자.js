function solution(s) {
    const arr = s.split('').sort();
    arr.splice(0, 0, '0');
    arr.push('0');
    let answer = '';
    for(let i = 1; i < arr.length - 1; i++) {
        if((arr[i] !== arr[i+1]) && arr[i] !== arr[i-1]) answer += arr[i];
    }
    return answer;
}