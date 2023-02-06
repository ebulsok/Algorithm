function solution(my_string) {
    const re = /[0-9]/g;
    let = answer = my_string.match(re);
    answer = answer.map(el => Number(el));
    answer.sort();
    return answer;
}