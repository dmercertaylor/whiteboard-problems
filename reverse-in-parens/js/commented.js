function reverseInParens(text, startWithReverse = false){
    // Helper function which reverses the string, but
    // swaps forwards and backwards parentheses.
    const reverseParens = t =>{
        t.reverse();
        for(let i=0; i<t.length; i++){
            if(t[i] === '(') t[i] = ')';
            else if(t[i] === ')') t[i] = '(';
        }
        return t;
    }

    // Helper function to find the end parenthese
    const findEndParen = (t, i=0) => {
        let open = 1;
        for(; i<t.length; i++){
            if(t[i] === '(') open++;
            else if(t[i] === ')'){
                open--;
                if(open === 0) return i;
            }
        }
        return -1;
    }

    // Recursive calls will pass an array, but
    // the initial call may be a string, so we
    // array-ify it here.
    if(typeof text === 'string') text = text.split('');
    // indicates if we should reverse the space in the string outside parens
    if(startWithReverse) text = reverseParens(text, true);
    let endParen = 0;
    // Iterate through each instance of opening parens
    for(let startParen = text.indexOf('('); startParen !== -1; startParen = text.indexOf('(', endParen)){
        // get index of the end paren with relation to startParen
        endParen = findEndParen(text, startParen + 1);
        // Run this function on only the text inside the parens. The true parameter
        // indicates that all text should be immediately reversed before further parsing.
        let rev = reverseInParens(text.splice(startParen + 1, endParen - startParen - 1), true);
        // add output from our recursive call to the output
        text.splice(startParen+1, 0, ...rev);
    }
    return (typeof text === 'object') ? text.join('') : text;
}