function solution(dots) {
    if(g(dots[0], dots[1]) === g(dots[2], dots[3])) return 1;
    if(g(dots[0], dots[2]) === g(dots[1], dots[3])) return 1;
    if(g(dots[0], dots[3]) === g(dots[1], dots[2])) return 1;
    return 0;
}


function g(a, b) {
    return (a[1] - b[1]) / (a[0] - b[0]);
}