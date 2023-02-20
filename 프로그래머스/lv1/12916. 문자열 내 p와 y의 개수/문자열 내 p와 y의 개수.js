function solution(s){
    const arr = s.split('');
    if(arr.filter(el => el === 'p' || el === 'P').length === arr.filter(el => el === 'y' || el === 'Y').length) return true;
    return false;
}