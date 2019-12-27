#include <stdio.h>
#include <stdlib.h>

char *alphabet_position(char *text);

int main(int argc, char **argv){
    if(argc != 2){
        fprintf(stderr, "\tUsage: alpha_to_numeric string\n");
        return 1;
    }

    char * o = alphabet_position(argv[1]);
    printf("\t%s\n", o);
    free(o);

    return 0;
}