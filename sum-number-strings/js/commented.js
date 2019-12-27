function sumStrings(a,b) {
    // Helper function to trim zeroes, array-ify,
    // and reverse strings. Reverse is purely to
    // make iterating more logical.
    const prep = z => z.replace(/^0+/, '').split('').reverse();
    // Using tuples purely to save 1 line of code,
    // this is a CodeWars solve after all.
    [a, b] = [prep(a), prep(b)];
    // Ensure that a is the longer string
    if(b.length > a.length) [a, b] = [b, a];
    // Create our output array, and carry to indicate
    // if the previous digits added to more than 10
    let carry = 0, out = [];
    // Iterate through a, the longer array.
    for(let i = 0; i < a.length; i++){
        // Add a, b, and the carry digit. If
        // b is undefined, just use 0 instead.
        out[i] = Number(a[i]) + (b[i] ? Number(b[i]) : 0) + carry;
        // If current digit is over 10, set carry digit
        // and reduce the current digit as appropriate.
        if (out[i] > 9) [out[i], carry] = [out[i] - 10, 1];
        else carry = 0;
    }
    // If anything is left in carry, add it to the end
    // of output.
    if(carry) out.push(1);
    // Reverse and stringify
    return out.reverse().join('');
}