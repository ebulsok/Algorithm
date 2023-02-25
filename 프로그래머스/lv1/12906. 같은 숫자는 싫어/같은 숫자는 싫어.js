function solution(arr)
{
    let answer = [];
    arr.forEach((el, i) => {
        if(i === 0 || el !== arr[i-1]) answer.push(el);
    })
    
    return answer;
}