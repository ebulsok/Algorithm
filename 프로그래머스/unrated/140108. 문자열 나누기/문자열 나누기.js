function solution(s) {
    let answer = 0;
    // const len = s.length;
    while(s.length > 0) {
        let same = 1;
        let diff = 0;
        for(var i = 1; i < s.length; i++) {
            if(s[0] === s[i]) same++;
            else diff++;
            
            if(same === diff) break;
        }
        s = s.slice(i+1);
        answer++;
    }
    
    return answer;
}