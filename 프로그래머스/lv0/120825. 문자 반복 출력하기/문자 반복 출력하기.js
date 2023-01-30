function solution(my_string, n) {
    let answer = '';
    Array.from(my_string).forEach((el) => answer += el.repeat(n));
    return answer;
}