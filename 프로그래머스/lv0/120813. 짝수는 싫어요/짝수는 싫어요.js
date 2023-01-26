function solution(n) {
    let arr = [];
    if(n % 2) for(let i = 1; i <= n; i += 2) arr.push(i);
    else for(let i = 1; i < n; i += 2) arr.push(i);
    return arr;
}