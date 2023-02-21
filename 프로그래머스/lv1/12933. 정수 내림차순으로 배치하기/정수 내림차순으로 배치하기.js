function solution(n) {
    const arr = String(n).split('').sort((a, b) => b - a);
    return Number(arr.join(''));
}