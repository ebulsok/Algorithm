function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    const limit = [Math.floor(board[0]/2), Math.floor(board[1]/2)];
    
    keyinput.forEach(el => {
        if(el === 'up' && Math.abs(y+1) <= limit[1]) y++;
        else if(el === 'down' && Math.abs(y-1) <= limit[1]) y--;
        else if(el === 'left' && Math.abs(x-1) <= limit[0]) x--;
        else if(el === 'right' && Math.abs(x+1) <= limit[0]) x++;
    });
    
    return [x, y];
}