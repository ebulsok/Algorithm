function solution(num_list) {
    let len = num_list.length;
    let arr = [];
    for(let i = len - 1; i >= 0; i--) arr.push(num_list[i]);
    
    return arr;
}