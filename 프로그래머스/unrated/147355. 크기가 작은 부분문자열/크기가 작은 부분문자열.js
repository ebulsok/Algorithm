function solution(t, p) {
    const len = p.length;
    let arr = [];
    for(let i = 0; i < t.length - len + 1; i++) {
        arr.push(t.slice(i, i + len));
    }
    return arr.filter(el => Number(el) <= Number(p)).length;
}