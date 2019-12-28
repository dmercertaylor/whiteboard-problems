// 1-line meme solution:
const shortWordsToHex=s=>s.split(' ').map(w=>"#"+[0,1,2].map(i=>w[i]?w.charCodeAt(i).toString(16):'00').join(''));

function wordsToHex(words) {
    return words.split(' ').map(word => {
        let txt = ['#'];
        for(let i=0; i<3; i++){
            txt.push(word[i]?word.charCodeAt(i).toString(16) : '00');
        }
        return txt.join('');
    });
}