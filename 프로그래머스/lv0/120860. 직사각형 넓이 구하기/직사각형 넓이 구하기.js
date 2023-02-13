function solution(dots) {
    const index = dots.findIndex(el => (el[0]!=dots[0][0]) && (el[1]!= dots[0][1]));
    const a = Math.abs(dots[0][0] - dots[index][0]);
    const b = Math.abs(dots[0][1] - dots[index][1]);
    return a * b;
}