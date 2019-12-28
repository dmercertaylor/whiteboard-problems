function reverseOnlyLetters(text){
    let rev = text.match(/[a-z]/gi);
    if(rev) rev.reverse();
    else return text;
    let offset = 0;
    return text.split('').map((c, i)=>{
        if(/[a-z]/i.test(c)) return rev[i - offset];
        offset++;
        return c;
    }).join('');
}

function makeStr(){
    const limit = Math.floor(Math.random() * 64) + 64;
    const letters = "abcdefghijklmnopqrstuvwxyz0123456789 ";
    let str = [];
    for(let j = 0; j < limit; j++){
        str.push(letters[Math.floor(Math.random() * letters.length)]);
    }
}