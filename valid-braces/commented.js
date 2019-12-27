function validBraces(braces){
    // Braces we're going to be looking for
    const openers = ['(', '{', '['];
    const closers = [')', '}', ']'];
    // stack we're going to push and pop braces to
    let opened = [];
    for(const char of braces){
        // add brace to the stack if it's in our openers list
        if(openers.includes(char)) opened.push(char);
        else {
            // If a closing brace is found, check if it closes
            // the most recent brace on the stack.
            // If so, pop from the stack, else return false.
            let cindex = closers.indexOf(char);
            if(cindex === -1) continue;
            else if(openers[cindex] !== opened.pop()) return false;
        }
    }
    // If anything is left in the stack, return false.
    // Else, return true.
    return (opened.length) ? false : true;
}