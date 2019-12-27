#include <stdio.h>
#include <stdlib.h>

unsigned long long next_smaller_number(unsigned long long n);

int main(int argc, char ** argv){
    if(argc < 2){
        printf("Usage: next_smaller number\n");
        return 1;
    }
    unsigned long long out = next_smaller_number(strtoull(argv[1], (char **) NULL, 10));
    if(out == -1) printf("\t-1\n");
    else printf("\t%llu\n", out);
}