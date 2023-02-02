function solution(rsp) {
    rsp = rsp.split('');
    let answer = rsp.reduce((prev, curr) => {
        if(curr === '2') return prev + '0';
        else if(curr === '0')  return prev + '5'
        else if(curr === '5')  return prev + '2'
    }, '')
    return answer;
}