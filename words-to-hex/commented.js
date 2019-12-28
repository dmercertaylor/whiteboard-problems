// 1-line meme solution:
const shortWordsToHex=s=>s.split(' ').map(w=>"#"+[0,1,2].map(i=>w[i]?w.charCodeAt(i).toString(16):'00').join(''));

function wordsToHex(words) {
    // Split string into words as divided
    // by spaces, and map through words
    return words.split(' ').map(word => {
        let txt = ['#'];
        // Iterate through the first 3 chars
        for(let i=0; i<3; i++){
            // push to txt the hexidecimal charCode of word[i]
            // If word[i] is falsey (i.e. undefined), push '00' instead.
            txt.push(word[i]?word.charCodeAt(i).toString(16) : '00');
        }
        // string-ify and return txt
        return txt.join('');
    });
}