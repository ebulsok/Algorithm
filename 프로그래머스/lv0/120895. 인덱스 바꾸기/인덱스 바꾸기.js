function solution(my_string, num1, num2) {
    const n1 = my_string[num1];
    const n2 = my_string[num2]
    let answer = '';
    for(let i = 0; i < my_string.length; i++) {
        if(i === num1) answer+= n2;
        else if(i === num2) answer += n1;
        else answer += my_string[i];
    }
    return answer
}