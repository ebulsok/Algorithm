function solution(age) {
    return [...String(age)].map(el => String.fromCharCode(Number(el) + 97)).join('');
}