function solution(hp) {
    let answer = 0;
    [answer, hp] = f(hp, answer, 5);
    [answer, hp] = f(hp, answer, 3);
    [answer, hp] = f(hp, answer, 1);   
    
    return answer;
}

function f(hp, answer, power) {
    const ant = Math.floor(hp / power);
    if(ant > 0) return [answer + ant, hp -= ant * power];
    else return [answer, hp];
}