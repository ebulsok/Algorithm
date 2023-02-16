function solution(score) {
    const arr = score.map(el => (el[0] + el[1]) / 2);
    let dup = JSON.parse(JSON.stringify(arr));
    dup.sort((a, b) => b - a);
    
    return arr.map(el => dup.indexOf(el) + 1)
    
}