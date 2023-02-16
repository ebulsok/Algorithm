function solution(id_pw, db) {
    const found = db.find(el => el[0] === id_pw[0]);
    if(found === undefined) return 'fail';
    else if(found[1] === id_pw[1]) return 'login'
    else return 'wrong pw';
}