function alphabetPosition(text) {
    return text.split('')
        .filter(a => /[a-zA-Z]/.test(a))
        .map(a => a.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1)
        .join(' ');
}