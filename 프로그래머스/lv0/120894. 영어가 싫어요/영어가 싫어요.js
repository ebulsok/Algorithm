function solution(numbers) {
    const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    arr.forEach((el, i) => {
        numbers = numbers.split(el).join(String(i));
    })
    return Number(numbers);
}