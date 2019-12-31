function queens(position, size) {
    if(size < 4) return position;
    const wrap = num => num >= size ? num % size : num < 0 ? num + size : num;
    const queenCols = [], pos = position.split('').map(a=>a==='0'?10:a);
    const fQ = {col: pos[0].charCodeAt(0) - 'a'.charCodeAt(0), row : Number(pos[1]) - 1 };
    for(let i = 0; i < size; i++) queenCols.push(i===fQ.row?fQ.col:undefined);
    const checkValid = (row, col) => {
      for(let i = 0; i < size; i++){
        if(i === row || queenCols[i] === undefined) continue;
        if(queenCols[i] === col || queenCols[i] === col-row+i || queenCols[i]===col+row-i) return false;
      }
      return true;
    }
    const placeQueens = (row) => {
      if(row === fQ.row) return true;
      const startCol = wrap(queenCols[wrap(row - 1)] + 2);
      for(let i = 0, curCol=startCol; i < size; i++, curCol = wrap(startCol+i)){
        if(!checkValid(row, curCol)) continue;
        queenCols[row] = curCol;
        if(placeQueens(wrap(row+1))){
          return true;
        } else {
          queenCols[row] = undefined;
        }
      }
      return false;
    }
    return !placeQueens(wrap(fQ.row+1)) ? position:queenCols.map((a, i)=>String.fromCharCode('a'.charCodeAt(0)+a)+((i+1)%10)).join(',');
}