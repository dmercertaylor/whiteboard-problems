// original: 
// const shortWordsToHex=s=>s.split(' ').map(w=>"#"+[0,1,2].map(i=>w[i]?w.charCodeAt(i).toString(16):'00').join(''));

// NOTE: If on one line, ES6 arrow functions auto-return
// whatever that value evaluates to. However, the
// definition of that value can be spread over several
// lines and still auto-return, allowing us to expand
// this function without adjusting the semantics or syntax.

const shortWordsToHex= s => s
    // Split s along the space characters into
    // an array of words.
    .split(' ')
    // Map returns a new array, filled with a
    // string for each word (w). Each word in
    // this mapped array will start with a #,
    // followed by some other string, defined
    // by our next map.
    .map(w=>"#"+[0,1,2]
        // map [0, 1, 2] into a new array.
        .map(i=>w[i]?w
        // if our word has a value at index i
        // (that is, 0, 1, or 2), get the
        // integer value of the ascii character
        // code.
        .charCodeAt(i)
        // cast this ascii code to base 16 (hex)
        .toString(16)
        // if the word does not have a value at
        // index i, use '00' instead of the charCode
        :'00')
        // stringify our newly created array.
        .join(''));