function solution(array, height) {
    array.push(height);
    array.sort((a, b) => a - b);
    const i = array.lastIndexOf(height);
    return array.length - i - 1;
}