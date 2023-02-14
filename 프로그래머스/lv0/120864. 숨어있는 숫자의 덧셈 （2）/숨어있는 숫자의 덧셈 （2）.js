function solution(my_string) {
    let answer = 0;
    let temp = ''
    const regex = new RegExp(/[0-9]/);
    for(let i = 0; i < my_string.length; i++) {
        if(regex.test(my_string[i])) {
            temp += my_string[i];
            if(i === my_string.length-1) answer += Number(temp);
        } else {
            answer += Number(temp);
            temp = '';
        }
    }
    return answer;
}