function solution(n, m) {
    const gcd = f(n, m);
    return [gcd, n*m/gcd]
}

function f(n, m) {
    let a = Math.min(n, m);
    let b = Math.max(n, m);
    
    while(b % a !==0) {
        let temp = a;
        a = b % a;
        b = temp;
    }
    return a;
}
