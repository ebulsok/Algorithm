function solution(strings, n) {
    strings.sort((a, b) => {
        char1 = a[n].charCodeAt(0);
        char2 = b[n].charCodeAt(0);
        if(char1 === char2) return a.localeCompare(b);
        return char1 - char2;
    });
    return strings;
}