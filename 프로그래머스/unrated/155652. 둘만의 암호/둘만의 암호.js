function solution(s, skip, index) {
    const skipArr = skip.split('').map(el => el.charCodeAt(0));
    const arr = s.split('').map(el => {
        let char = el.charCodeAt(0);
        for(let i = 0; i < index; i++) {
            do {
                char++;
                if(char > 122) char -= 26;
            } while(skipArr.includes(char));
        }
        return String.fromCharCode(char);
    })
    
    return arr.join('');
}