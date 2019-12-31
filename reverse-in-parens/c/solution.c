#include <string.h>
#include <stdlib.h>

static int find_end_paren(const char * t){
    int open = 1;
    for(int i=0;t[i] != '\0'; i++){
        if(t[i] == '(') open++;
        else if(t[i] == ')'){
            open--;
            if(open == 0) return i;
        }
    }
    return -1;
}

static char * str_rev(char * t, int limit){
    if(limit == -1) limit = strlen(t);
    for(int i=0; i<limit/2 + (limit % 2); i++){
        int j = limit - i - 1;
        if(t[i] == '(') t[i] = ')';
        else if(t[i] == ')') t[i] = '(';
        if(j != i){
            if(t[j] == '(') t[j] = ')';
            else if(t[j] == ')') t[j] = '(';
            char tmp = t[i];
            t[i] = t[j];
            t[j] = tmp;
        }
    }
    return t;
}

static char * rev_in_parens_helper(char * text, int len){
    for(int i=0; i<len; i++){
        if(text[i] == '('){
            int end_paren = find_end_paren(text + i + 1);
            str_rev(text + i + 1, end_paren);
            rev_in_parens_helper(text + i + 1, end_paren);
            i += end_paren;
        }
    }
    return text;
}

char * reverse_in_parens(const char * text){
    int text_len = strlen(text);
    char * output = malloc(text_len + 1);
    strcpy(output, text);
    rev_in_parens_helper(output, text_len);
    output[text_len] = '\0';
    return output;
}