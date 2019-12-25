function multiply(a, b)
{
    // Function to remove 0s from beginning of array
    trimZeroes = (r) => { while(r[0] == 0 && r.length !== 1) r.shift(); return r }

    // array-ify, trim, and reverse inputs.
    // Reverse isn't strictly necessary for this algorithm,
    // but makes iteration more logical and simplifies array functions.
    [a, b] = [trimZeroes(a.split('')).reverse(), trimZeroes(b.split('')).reverse()];

    // create output variable
    let output = [];

    // iterate through a
    for(let i=0; i<a.length; i++){
        // Skip 0's since they basically don't matter
        if(a[i] != 0){
            // Holder variable to show how much "leftover" there
            // is if two digits multiply to more than 10.
            let carryOver = 0;
            // iterate through b.
            for(let z=0; z<b.length; z++){
                // We're dealing with index [i + z] of output
                // to account for the position of the digits we're
                // multiplying.
                // If we haven't visited this digit yet, initialize it to 0.
                if(output[i+z] === undefined) output[i+z] = 0;

                // Actually multiply digits and add carryover
                output[i+z] += Number(a[i]) * Number(b[z]) + carryOver;

                // set carryOver and trim current output down to one digit.
                carryOver = (output[i+z] - output[i+z] % 10)/10;
                output[i+z] %= 10;
            }

            // Append whatever's left in carryOver to the end of output.
            output.push(...String(carryOver).split('').map(a=>Number(a)));
        }
        
        // If we haven't set output[i] yet, initialize it to 0.
        // This lets our other loop work so we aren't adding numbers
        // to undefined.
        else if(output[i] === undefined){
            output[i] = 0;
        }
    }

    // reverse, trim, and stringify our output
    // (since we were reversed inputs earlier).
    return trimZeroes(output.reverse()).join('');
}