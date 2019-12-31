function reverseInParens(text){
    // Array-ify text
    text = text.split('');
    // Iterate through text, skipping all non-'(' values. We also create the variables.
    for(let start=text.indexOf('('); start!==-1; start=text.indexOf('(', start+1)){
        // value to hold our end paren.
        let end=0
        // Iterate through text. When parentheses are balance (i.e. we haved
        // closed 1 + the number we have opened, thereby closing the one we
        // iterated to already), set end to that index - 1 and break.
        for(let open = 1, i = start + 1; i < text.length; i++){
          if(text[i] === '(') open++;
          else if(text[i] === ')' && (--open) === 0){
              end = i - 1;
              break
          }
        }
        // remove the text from between indexes start and end. Then, reverse it.
        // Then, map through that text, and flip the parentheses, so opens are now
        // closed, and vice versa.
        const reversedText = text.splice(start+1, end-start).reverse().map(a=>a=='('?')':a==')'?'(':a);
        // Put reversed text back in place in text, from where we removed it from.
        text.splice(start+1, 0, ...reversedText);
    }
    return text.join('');
}