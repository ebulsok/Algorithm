function solution(numbers) {
    numbers.forEach((el, i, arr) => {
        arr[i] *= 2;
    })
    return numbers;
}