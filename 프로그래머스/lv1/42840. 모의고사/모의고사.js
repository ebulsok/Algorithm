function solution(answers) {
    const p1 = [1, 2, 3, 4, 5];
    const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let arr = [{i: 1, a: 0}, {i: 2, a: 0}, {i: 3, a: 0}]
    
    answers.forEach((el, i) => {
        if(el === p1[i % 5]) arr[0].a++;
        if(el === p2[i % 8]) arr[1].a++;
        if(el === p3[i % 10]) arr[2].a++;
    })
    
    arr.sort((a, b) => b.a - a.a);
    
    if(arr[0].a === arr[2].a) return [1, 2, 3];
    else if(arr[0].a === arr[1].a) return [arr[0].i, arr[1].i];
    else return [arr[0].i];
}