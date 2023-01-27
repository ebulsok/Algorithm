function solution(array) {
    array.sort();
    let len = array.length;
    let n = array[0];
    let c = 1;
    let objArr = [];
    
    if(len === 1) return array[0];
    
    for(let i = 1; i < len; i++) {
        if(array[i] === array[i-1]) {
            c ++;
        } else {
            objArr.push({ num: n, cnt: c});
            n = array[i];
            c = 1;
        }
        
        if(i === len - 1) objArr.push({ num: n, cnt: c});
    }
    
    objArr.sort(function (a, b) {
      if (a.cnt > b.cnt) {
        return 1;
      }
      if (a.cnt < b.cnt) {
        return -1;
      }
        return 0;
    });
    
    if(objArr.length === 1) return array[0];
    if(objArr[objArr.length - 1].cnt === objArr[objArr.length - 2].cnt) return -1;
    else return objArr[objArr.length - 1].num;
}
