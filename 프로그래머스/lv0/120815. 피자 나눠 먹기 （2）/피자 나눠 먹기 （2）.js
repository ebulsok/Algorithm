function solution(n) {
    let gcd = (n1, n2) => (n2 ? gcd(n2, n1 % n2) : n1);
    return n / gcd(n, 6);
}