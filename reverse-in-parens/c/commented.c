#include <string.h>
#include <stdlib.h>

char * reverse_in_parens(const char * text){
    // (dangerously) copy text into output
    char * out = strcpy(malloc(strlen(text) + 1), text);
    // iterate through string.
    for(int i=0, end_paren=0; out[i] != '\0'; i++){
        // skip all non opening parens
        if(out[i] == '('){
            // Iterate forward to find end paren. Track number of
            // open parens as open.
            for(int j=i+1, open = 1; out[j] != '\0'; j++){
                // mark new open parens
                if(out[j] == '(') open++;
                // reduce parens if they close, set end_paren
                // if all closed and break;
                else if(out[j] == ')' && (--open) == 0 && (end_paren = j)) break;
            }
            // iterate forward to actually reduce text, from 1 char
            // after opening paren to 1 char after closing.
            for(int j=i+1, r=end_paren-1; j<end_paren-(end_paren-i-1)/2; j++, r--){
                char tmp = out[j];
                // Copy out[r] to out[j], and reverse them if they are parens
                out[j] = (out[r]=='(')?')':(out[r]==')')?'(':out[r];
                // do the same for out[j] to out[r], but skip if they
                // point to the same char.
                if(j != r) out[r] = (tmp=='(')?')':(tmp==')')?'(':tmp;
            }
        }
    }
    return out;
}