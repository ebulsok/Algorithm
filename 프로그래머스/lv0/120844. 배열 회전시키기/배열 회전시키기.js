function solution(numbers, direction) {
    if (direction === "right") {
        const el = numbers.pop();
        numbers.splice(0, 0, el);
    } else {
        const el = numbers.shift();
        numbers.push(el);
    } 
    return numbers;
}