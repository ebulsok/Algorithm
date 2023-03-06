function solution(k, score) {
    let temp = [];
    const answer = score.map(el => {
        temp.push(el);
        temp.sort((a, b) => b - a);
        
        const len = temp.length;
        if(len <= k) return temp[len - 1];
        
        temp.pop();
        return temp[k - 1];
    })
    return answer;
}