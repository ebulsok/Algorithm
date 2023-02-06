function solution(my_string) {
    let answer = 0;
    const re = /[0-9]/g;
    const str = my_string.match(re);
    str.forEach(el => answer += Number(el));
    return answer;
}