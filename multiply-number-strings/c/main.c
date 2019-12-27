#include <stdio.h>
#include <stdlib.h>

char *multiply(char *a, char *b);

int check_number(const char *a){
    while(*a != '\0') if(*a < '0' || *a++ > '9') return 1;
    return 0;
}

int main(int argc, char ** argv){
    if(argc < 3){
        printf("\tUsage: multiply_strings number number\n");
        return 1;
    }
    for(int i=1; i<argc; i++){
        if(check_number(argv[i])){
            fprintf(stderr, "\tError: inputs must be numbers\n");
            return 1;
        }
    }
    char * o = multiply(argv[1], argv[2]);
    for(int i=3; i<argc; i++){
        char *z = o;
        o = multiply(z, argv[i]);
        free(z);
    }
    
    printf("\t%s\n", o);
    return 0;
}