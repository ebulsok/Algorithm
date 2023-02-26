function solution(sizes) {
    const arr = sizes.map(el => [Math.max(el[0], el[1]), Math.min(el[0], el[1])]);
    return (arr.sort((a, b) => b[0] - a[0]))[0][0] * (arr.sort((a, b) => b[1] - a[1]))[0][1];
}