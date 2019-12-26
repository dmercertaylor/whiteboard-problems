#include <stdio.h>
#include <ctype.h>

char *alphabet_position(char *text) {

    // Because we need to allocate space for our
    // response, iterate through text once, adding
    // 2 to our length for A-I and 3 for all other
    // letters. This gives us enough space for
    // digits, spaces, and a null terminator.
    int output_len = 0;
    for(char *c = text; *c != '\0'; c++){
        if(isalpha(*c)){
            output_len += (tolower(*c) >= 'a' && tolower(*c) < 'a' + 9) ? 2 : 3;
        }
    }

    // Allocate space. due to the way this problem
    // was worded, if given an empty string, we need to
    // return a dynamically allocated null char, so
    // we handle that here.
    char * output = (output_len) ? malloc(output_len) : calloc(1, 1);
    // o is a handy pointer that we can move around, while
    // keeping our original output address in output.
    char * o = output;

    for(char *c = text; *c != '\0'; c++){
        if(isalpha(*c)){
            // Add a space if o isn't the same as output.
            if(o - output) *o++ = ' ';
            // Write alphabet's equivalent letter at o
            // NOTE: the int cast isn't actually necessary,
            // but I did it anyways since it seemed tasteful.
            o += sprintf(o, "%d", (int) tolower(*c) - 'a' + 1);
        }
    }
    // NOTE: sprintf null terminates for us.

    return output;
}