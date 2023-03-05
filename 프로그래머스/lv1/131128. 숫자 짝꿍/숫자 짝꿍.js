function solution(X, Y) {
    let answer = '';
    const x = X.split('')
    const y = Y.split('');
    const z = [...(new Set(x))].sort((a, b) => b - a);
    z.forEach(el => {
        const nx = x.filter(e => el === e).length;
        const ny = y.filter(e => el === e).length;
        if(ny > 0) answer += el.repeat(Math.min(nx, ny));
    })
    if(answer === '') return '-1';
    else if(answer[0] === '0') return '0';
    else return answer;
}