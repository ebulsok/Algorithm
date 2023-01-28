function solution(numbers) {
    let answer = 0;
    numbers.forEach(el => answer += el);
    return answer / numbers.length
}