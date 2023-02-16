function solution(numlist, n) {
    numlist.sort((a, b) => b - a);
    let arr = numlist.map(el => {
        const obj = {
            a: el,
            b: Math.abs(n -el),
        }
        return obj
    });
    arr.sort((n1, n2) => n1.b - n2.b);

    return arr.map(el => el.a);
}