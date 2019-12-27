function validBraces(braces){
    const openers = ['(', '{', '['];
    const closers = [')', '}', ']'];
    let opened = [];
    for(const char of braces){
        if(openers.includes(char)) opened.push(char);
        else {
            let cindex = closers.indexOf(char);
            if(cindex === -1) continue;
            else if(openers[cindex] !== opened.pop()) return false;
        }
    }
    return (opened.length)?false:true;
}