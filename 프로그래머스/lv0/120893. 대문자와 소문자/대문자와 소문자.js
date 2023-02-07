function solution(my_string) {
    let str = '';
    for(let i = 0; i < my_string.length; i++) {
        const char = my_string[i];
        if(char === char.toUpperCase()) str += char.toLowerCase();
        else str += char.toUpperCase();
    }
    return str;
}