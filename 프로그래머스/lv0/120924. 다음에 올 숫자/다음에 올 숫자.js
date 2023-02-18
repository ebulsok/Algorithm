function solution(common) {
    const len = common.length;
    const quot = common[len - 1]/common[len - 2];
    if(quot === common[len - 2]/common[len - 3] ) return common[len - 1] * quot;
    else return common[len - 1] + common[1]-common[0]
 }