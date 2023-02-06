function solution(my_string) {
    const str = my_string.split('');
    let answer = [str[0]];
    str.forEach(el => {
        for(let i = 0; i < answer.length; i++) {
            if(answer[i] == el) break;
            if(i === answer.length - 1) answer.push(el);
        }
    })
    return answer.join('');
}