function isValidIP(str) {
    if(!/^([0-9]|[1-9][0-9]{1,2})(\.([0-9]|[1-9][0-9]{1,2})){3}$/.test(str)) return false;
    for(const i of str.split('.')) if(Number(i) > 255) return false;
    return true;
}