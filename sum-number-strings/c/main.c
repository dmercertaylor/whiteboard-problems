#include <stdio.h>
#include <stdlib.h>

char * strsum(const char *a, const char *b);

int invalid(const char *c){
    for(;*c != '\0'; c++) if(*c < '0' || *c > '9') return 1;
    return 0;
}

int main(int argc, char ** argv){
    if(argc != 3){
        printf("\tUsage: add_as_strings number1 number2\n");
        return 1;
    }
    if(invalid(argv[1]) || invalid(argv[2])){
        fprintf(stderr, "\tInputs must be numbers\n");
        return 1;
    }

    char *o = strsum(argv[1], argv[2]);
    printf("\t%s + %s = %s\n", argv[1], argv[2], o);
    free(o);

    return 0;
}
