function solution(n) {
    const arr = n.toString().split('');
    return arr.reduce((prev, curr) => Number(prev) + Number(curr), 0)
}