function solution(lottos, win_nums) {
    let cor = 0;
    win_nums.forEach(el => {
        if(lottos.includes(el)) cor++;
    });
    let zero = lottos.filter(el => el === 0).length;
    
    if(cor === 0 && zero === 0) return [6, 6]
    return cor > 0 ? [7-(cor + zero), 7-cor] : [7-zero, 6];
}