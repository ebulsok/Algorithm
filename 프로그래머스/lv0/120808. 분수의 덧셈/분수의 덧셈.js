function solution(numer1, denom1, numer2, denom2) {
    let denom = denom1 * denom2;
    let numer = numer1 * denom2 + numer2 * denom1;
    
    var answer = f(numer, denom);
    return answer;
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