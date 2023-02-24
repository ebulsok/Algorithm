function solution(price, money, count) {
    return (money - count * price * (count + 1) / 2) < 0 ?  Math.abs(money - count * price * (count + 1) / 2) : 0
}