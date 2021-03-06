#include <string.h>
#include <stdlib.h>

char * reverse_in_parens(const char * text){
    char * out = strcpy(malloc(strlen(text) + 1), text);
    for(int i=0, end_paren=0; out[i] != '\0'; i++){
        if(out[i] == '('){
            for(int j=i+1, open = 1; out[j] != '\0'; j++){
                if(out[j] == '(') open++;
                else if(out[j] == ')' && (--open) == 0 && (end_paren = j)) break;
            }
            for(int j=i+1, r=end_paren-1; j<end_paren-(end_paren-i-1)/2; j++, r--){
                char tmp = out[j];
                out[j] = (out[r]=='(')?')':(out[r]==')')?'(':out[r];
                if(j != r) out[r] = (tmp=='(')?')':(tmp==')')?'(':tmp;
            }
        }
    }
    return out;
}