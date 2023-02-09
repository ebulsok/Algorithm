function solution(array) {
    let answer = [];
    const temp = array.map((el) => el);
    array.sort((a, b) => a- b);
    const lastEl = array.pop();
    answer.push(lastEl);
    answer.push(temp.indexOf(lastEl));
    return answer;
}