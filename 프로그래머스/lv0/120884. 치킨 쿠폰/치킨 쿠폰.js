function solution(chicken) {
    let answer = 0;
    while(chicken >= 10) {
        const coupon = Math.floor(chicken/10);
        answer += coupon;
        chicken -= 9*coupon;
    }
    return answer;
}