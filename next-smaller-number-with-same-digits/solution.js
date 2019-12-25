function nextSmaller(n) {
    let out = n.toString().split('');

    for(let i = out.length - 2; i >= 0; i--){
        if(out[i] > out[i + 1]){
            for(let z = out.length - 1; z > i; z--){
                if(out[i] > out[z] && !(i === 0 && out[z] == 0)){
                    [out[i], out[z]] = [out[z], out[i]];
                    out.splice(i+1, out.length-i, ...out.slice(i + 1).sort((a, b) => a < b));
                    return Number(out.join(''));
                }
            }
        }
    }
    return -1;
}