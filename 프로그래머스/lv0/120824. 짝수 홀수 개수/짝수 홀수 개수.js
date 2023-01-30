function solution(num_list) {
    const even = num_list.filter(el => el % 2).length;
    return [num_list.length - even, even];
}