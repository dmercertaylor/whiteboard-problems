function reverseInParens(text, startWithReverse = false){
    const reverseParens = t =>{
        t.reverse();
        for(let i=0; i<t.length; i++){
            if(t[i] === '(') t[i] = ')';
            else if(t[i] === ')') t[i] = '(';
        }
        return t;
    }

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

    if(typeof text === 'string') text = text.split('');
    if(startWithReverse) text = reverseParens(text, true);
    let endParen = 0;
    for(let startParen = text.indexOf('('); startParen !== -1; startParen = text.indexOf('(', endParen)){
        endParen = findEndParen(text, startParen + 1);
        let rev = reverseInParens(text.splice(startParen + 1, endParen - startParen - 1), true);
        text.splice(startParen+1, 0, ...rev);
    }
    return (typeof text === 'object') ? text.join('') : text;
}