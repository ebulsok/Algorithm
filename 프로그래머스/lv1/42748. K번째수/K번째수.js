function solution(array, commands) {
    const answer = commands.map(el => {
        const arr = array.slice(el[0] - 1, el[1]).sort((a, b) => a -b);
        return arr[el[2] - 1];
    })
    return answer;
}