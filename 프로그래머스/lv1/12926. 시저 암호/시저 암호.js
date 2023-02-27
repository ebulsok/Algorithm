function solution(s, n) {
    const arr = s.split('').map(el => {
        let code = el.charCodeAt(0);
        if(code === 32) return el;
        else if(code < 97) {
            code += n;
            if(code > 90) code -= 26;
        } else {
            code += n;
            if(code > 122) code -= 26;
        }
        
        return String.fromCharCode(code);
    })
    return arr.join('');
}