function solution(x) {
    const arr = String(x).split('');
    const n = arr.reduce((acc, cur) => acc + Number(cur), 0);
    return x % n === 0
}