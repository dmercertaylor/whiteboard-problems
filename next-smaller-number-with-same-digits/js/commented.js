function nextSmaller(n) {
    // out = array of characters of the digits in n
    let out = n.toString().split('');

    // Iterate backwards through out, starting from the second to last index
    for(let i = out.length - 2; i >= 0; i--){
        // This check isn't strictly necessary, but eliminates
        // pointless iteration.
        if(out[i] > out[i + 1]){
            // Find furthest left value which is lower than i
            for(let z = out.length - 1; z > i; z--){
                // This extra and just checks that we aren't putting a zero at
                // the start of the number
                if(out[i] > out[z] && !(i === 0 && out[z] == 0)){
                    // Swap values at i and z
                    [out[i], out[z]] = [out[z], out[i]];
                    // Sort in descending order the values in out after i.
                    out.splice(i+1, out.length-i, ...out.slice(i + 1).sort((a, b) => a < b));
                    return Number(out.join(''));
                }
            }
        }
    }
    // Return if no number was found.
    return -1;
}