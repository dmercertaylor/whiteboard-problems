#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

char * reverse_letters(const char *text){
    int text_len = strlen(text);
    if(text_len == 0) return calloc(1, 1);
    char *rev = malloc(text_len), *c = rev;
    const char *t = text + text_len - 1;
    for(; t >= text; t--) if(isalpha(*t)) *c++ = *t;
    *c = '\0';

    char *out = malloc(text_len), *r = rev;
    c = out;
    for(const char *t = text; *t != '\0'; t++){
        if(isalpha(*t)) *c++ = *r++;
        else *c++ = *t;
    }
    *c = '\0';

    free(rev);
    return out;
}

int main(int argc, char ** argv){
    if(argc != 2){
        printf("\tUsage: reverse_letters string\n");
        return 1;
    }

    char * out = reverse_letters(argv[1]);
    printf("\t%s\n", out);
    free(out);
    return 0;
}