function convertQueryToMap(query) {
    if(!query) return {'':undefined};
    let out = {};
    let currentSelection = out;
    for(let item of query.split(/[.&]/)){
        if( item.includes('=') ){
            const keys = item.split('=');
            currentSelection[keys[0]] = decodeURIComponent(keys[1]);
            currentSelection = out;
            continue;
        } else if( !currentSelection.hasOwnProperty(item) ){
            currentSelection[item] = {};
        }
        currentSelection = currentSelection[item];
    }
    return out;
}