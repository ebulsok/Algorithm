function solution(lines) {
    let arr = new Array(200);
    arr.fill(0);
    
    lines.forEach(el => {
        for(let i = el[0]; i < el[1]; i++) arr[i+100]++;
    })
    
    const result = arr.filter(el => el > 1);
    return result.length;
    
}