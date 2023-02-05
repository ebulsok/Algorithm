function solution(my_string) {
    return result = my_string.split('').filter((e)=>(!'aeiou'.includes(e))).join('');
}