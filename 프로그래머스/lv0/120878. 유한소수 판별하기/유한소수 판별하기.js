function solution(a, b) {
    let [n1, n2] = f(a, b);
    while(n2 % 5 === 0 || n2 % 2 === 0) {
        if(n2 % 5 === 0) n2 /= 5;
        if(n2 % 2 === 0) n2 /= 2;
    }
    if(n2 === 2 || n2 === 5 || n2 === 1) return 1;
    else return 2
}

function f(n, d) {
    let a = n;
    let b = d;
    if(n <= d) {
        while(d % n !==0) {
            let temp = n;
            n = d % n;
            d = temp;
        }
        return [a/n, b/n]
    } else {
        while(n % d !==0) {
            let temp = d;
            d = n % d;
            n = temp;
        }
        return [a/d, b/d]
    }
}