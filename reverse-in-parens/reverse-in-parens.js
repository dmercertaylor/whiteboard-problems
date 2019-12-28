console.log(reverseInParens("(h(el)lo)"));
console.log(reverseInParens("well ((hello) ereht)"));

function reverseInParens(text){
    if(typeof text === 'string') text = text.split('');
    console.log("\t", text.join(''));
    let startParen = text.indexOf('(');
    if(startParen === -1) return text.reverse().join('');
    let endParen = findEndParen(text, startParen + 1);
    let rev = reverseParens(text.splice(startParen+1, endParen - startParen - 1));
    text.splice(startParen+1, 0, reverseInParens(rev));
    return text.join('');
}

function reverseParens(text){
    text.reverse();
    for(let i=0; i<text.length; i++){
        if(text[i] === '(') text[i] = ')';
        if(text[i] === ')') text[i] = '(';
    }
    return text;
}

function findEndParen(text, i=0){
    let open = 1;
    for(; i<text.length; i++){
        if(text[i] === '(') open++;
        else if(text[i] === ')'){
            open--;
            if(open === 0) return i;
        }
    }
    return -1;
}