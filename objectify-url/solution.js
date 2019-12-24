function convertQueryToMap(query) {
    // default if no value is passed
    if(!query) return {'':undefined};
    
    // Define output
    let out = {};
    // Pointer we will move around
    let currentSelection = out;

    // Spilt query on '.' and and, and iterate through
    for(let item of query.split(/[.&]/)){

        // If query has an equals, set that key in our
        // current selection to the value after the equals
        if( item.includes('=') ){
            const keys = item.split('=');
            currentSelection[keys[0]] = decodeURIComponent(keys[1]);
            currentSelection = out;
            continue;
        }
        // Create empty object so we don't try to access keys
        // from undefined.
        else if( !currentSelection.hasOwnProperty(item) ){
            currentSelection[item] = {};
        }
        // Move selection to the new key
        currentSelection = currentSelection[item];
    }
    return out;
}