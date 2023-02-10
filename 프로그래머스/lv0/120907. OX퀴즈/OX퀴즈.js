function solution(quiz) {
    const answer = quiz.map(el => {
        const arr = el.split(' ');
        if(arr[1] === '+') {
            if(Number(arr[0]) + Number(arr[2]) === Number(arr[4])) return 'O';
            else return 'X';
        } else {
            if(Number(arr[0]) - Number(arr[2]) === Number(arr[4])) return 'O';
            else return 'X';
        }
    });
    return answer;
}