function solution(polynomial) {
    let answer = ''
    const arr = polynomial.split(' + ');
    let x = 0;
    let n = 0;
    
    arr.forEach(el => {
        if(el.includes('x')) {
            if(el[0] === 'x') x++;
            else x += Number(el.slice(0, el.length - 1));
        } else n += Number(el);
    })
    
    if(x !== 0 && n !== 0) answer = answer + x + 'x + ' + n;
    else if(x === 0) answer += n;
    else if(n === 0) answer = answer + x + 'x';
    
    if(answer.startsWith('1x')) return answer.replace('1x', 'x');
    return answer;
}