function solution(s) {
    const arr = s.split('');
    const len = s.length;
    return (len % 2 ? s[Math.floor(len/2)] : s[(len/2 - 1)] + s[len/2]);
}