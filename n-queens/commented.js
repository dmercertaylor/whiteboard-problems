function queens(position, size) {
    // NOTE: In this problems description, it is given that only
    // possible positions will occur. However, should an impossible
    // position be given, the original position string should be given back.
    // This seems like strange behavior to me, but is required by the spec.
    //
    // No boards with size < 4 are possible, so they are filtered here.
    if(size < 4) return position;

    // Useful function to wrap positions so they stay on the board.
    // The use of the ternary operators here is theoretically an optimization
    // in some browsers/hardware, although I haven't tested it.
    const wrap = num => (num >= size) ? num % size : ( (num < 0) ? num + size : num );
    // We will store the columns we place queens in here
    const queenCols = [];
    // Because our start position is given as a string, turn it into something
    // we can actually read. We use a new const pos here instead of position,
    // because we might want to return position in it's original form later on.
    // This saves a split('').
    const pos = position.split('').map(a=>a==='0'?10:a);
    // The parse pos, so the object firstQueen now contains the board coordinates as numbers.
    const firstQueen = {col: pos[0].charCodeAt(0) - 'a'.charCodeAt(0), row : Number(pos[1]) - 1 };
    // Fill queenRows with undefined, so we have enough valid entries.
    // Not doing this actually works in some browsers, but is not safe.
    for(let i = 0; i < size; i++) undefined;
    // Put data on our initial queen in queenCols.
    queenCols[firstQueen.row] = firstQueen.col;

    // helper function that returns true/false if a queen position is
    // valid, based on queenCols. Note that we don't check for row
    // matches, because the algorithm used will never let those
    // occur. However, if we were being safe, we would want to
    // do that.
    const checkValid = (row, col) => {
      for(let i = 0; i < size; i++){
        // skip unfilled rows.
        if(i === row || queenCols[i] === undefined) continue;
        // Check if column or diagnol has a threatening queen.
        if(queenCols[i] === col || queenCols[i] === col-row+i || queenCols[i]===col+row-i) return false;
      }
      return true;
    }

    // Function that will recursively place queens.
    // row = the row we try to place on
    const placeQueens = (row) => {
        // Becuase we recursively call this function on the next row (wrapping
        // around to 0 when row > size), reaching our initial queen row means
        // we have filled every queen, and is therefor our end state.
        if(row === firstQueen.row) return true;
        // Cycle through every col, starting from startCol and wrapping around
        // when curCol > size. Start on startCol, which defaults to two cols
        // over from the previous row. This is often the correct value.
        // If one wanted to make this solution faster, creating a list of
        // values to cycle through instead of iterating would be a good way to start.
        const startCol = wrap(queenCols[wrap(row - 1)] + 2);
        for(let i = 0, curCol=startCol; i < size; i++, curCol = wrap(startCol+i)){
            // if column is invalid, go to next col.
            if(!checkValid(row, curCol)) continue;
            // Mutate queenCols to include our new, valid col. This makes recursion actually work.
            queenCols[row] = curCol;
            // Call this function on the next row down. If true,
            // pass true back up. This also allows for "collapsing"
            // or backtracking if we reach a state where no queen can
            // be placed.
            if(placeQueens(wrap(row+1))){
                return true;
            } else {
                // if we did reach a state where the queen is unplacable,
                // remove this col from queenCols and continue through the loop
                queenCols[row] = undefined;
            }
        }
        // if no cols are valid, return false.
        return false;
    }
    // if placeQueens succeeds
    if(placeQueens(wrap(firstQueen.row+1),0)){
        // requested output format is comma separated board
        // positions in a string, i.e. 'a1, b3, c5...'.
        // This map turns queenCols into that.
        return queenCols
            // for each value in queenCols, a = value, i = index (and therefore the row the queen is placed on)
            .map((a, i)=> `${
                // Create a letter from the value of charCode of 'a' plus the column.
                String.fromCharCode('a'.charCodeAt(0)+a)
            // After this letter, the row is the index in queenCols + 1.
            }${((i+1)%10)}`)
            // Join these values into a string, comma separated.
            .join(',');
    }
    // else, position is not possible, so we return our input position
    return position;
}