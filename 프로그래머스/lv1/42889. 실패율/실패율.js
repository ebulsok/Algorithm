function solution(N, stages) {
    let answer = [];
    let chal = stages.length;
    for(let i = 1; i <= N; i++) {
        const arr = stages.filter(el => el > i);
        answer.push({ stage: i, fail: (chal - arr.length) / chal });
        chal = arr.length;
    }
    answer.sort((a, b) => b.fail - a.fail);
    return answer.map(el => el.stage);
}