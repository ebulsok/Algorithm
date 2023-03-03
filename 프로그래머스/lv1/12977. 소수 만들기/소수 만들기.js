function solution(nums) {
    let answer = 0;
    const len = nums.length;
    for(let i = 0; i < len - 2; i++) {
        for(let j = i + 1 ; j < len - 1; j++) {
            for(let k = j + 1; k < len; k++) {
                const num = nums[i] + nums[j] + nums[k]
                if(num % 2 && isPrime(num)) answer++;
            }
        }
    }
    return answer;
}

function isPrime(n) {
    for(let i = 3; i <= Math.sqrt(n); i += 2) {
        if(n % i === 0) return false;
    }
    return true;
}