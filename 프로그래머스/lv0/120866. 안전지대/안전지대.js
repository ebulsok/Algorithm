function solution(board) {
    let answer = 0;
    let arr = JSON.parse(JSON.stringify(board));
    board.forEach((el1, i) => {
       el1.forEach((el2, j) => {
           if(el2 === 1) {             
               if(j !== 0) arr[i][j-1] = 2;
               if(j !== el1.length-1) arr[i][j+1] = 2;
               
               if(i !== 0) {
                   if(j !== 0) arr[i-1][j-1] = 2;
                   arr[i-1][j] = 2;
                   if(j !== el1.length-1) arr[i-1][j+1] = 2;
               }
               
               if(i !== board.length-1) {
                   if(j !== 0) arr[i+1][j-1] = 2;
                   arr[i+1][j] = 2;
                   if(j !== el1.length-1) arr[i+1][j+1] = 2;
               }    
           }
       }) 
    })
    
    arr.forEach(el1 => el1.forEach(el2 => el2 === 0 ? answer++ : null));
    return answer;
}