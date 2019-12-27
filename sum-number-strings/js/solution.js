function sumStrings(a,b) {
    const prep = z => z.replace(/^0+/, '').split('').reverse();
    [a, b] = [prep(a), prep(b)];
    if(b.length > a.length) [a, b] = [b, a];
    let carry = 0, out = [];
    for(let i = 0; i < a.length; i++){
        out[i] = Number(a[i]) + (b[i] ? Number(b[i]) : 0) + carry;
        if (out[i] > 9) [out[i], carry] = [out[i] - 10, 1];
        else carry = 0;
    }
    if(carry) out.push(1);
    return out.reverse().join('');
}