function solution(emergency) {
    const arr = emergency.map(el => el);
    emergency.sort((a, b) => b - a);
    return arr.map(el => emergency.indexOf(el) + 1);
}