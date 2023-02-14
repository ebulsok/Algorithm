function solution(sides) {
    let answer = 0;
    sides.sort((a, b) => a - b);
    
    // 가장 긴 변인 경우
    let n = sides[0] + sides[1] - 1;
    while (n >= sides[1]) {
        answer++;
        n--;
    }
    
    // 가장 긴 변이 아닌 경우
    n = sides[1] - 1;
    while (n + sides[0] > sides[1] && n > 0) {
        answer++;
        n--;
    }
    
    return answer;
}