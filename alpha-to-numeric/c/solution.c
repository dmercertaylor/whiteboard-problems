#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

char *alphabet_position(char *text) {
    int output_len = 0;

    for(char *c = text; *c != '\0'; c++){
        if(isalpha(*c)){
            output_len += (tolower(*c) >= 'a' && tolower(*c) < 'a' + 9) ? 2 : 3;
        }
    }

    char * output = (output_len) ? malloc(output_len) : calloc(1, 1);
    char * o = output;

    for(char *c = text; *c != '\0'; c++){
        if(isalpha(*c)){
            if(o - output) *o++ = ' ';
            o += sprintf(o, "%d", (int) tolower(*c) - 'a' + 1);
        }
    }

    return output;
}