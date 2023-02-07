function solution(array, n) {
    array.push(n);
    array.sort((a, b) => a- b);
    const index = array.indexOf(n);
    
    if(index === 0) return array[1];
    else if(index === array.length - 1) return array[array.length - 2];
    
    const a = array[index-1];
    const b = array[index+1];
    if(n-a <= b-n) return a;
    else return b;
}