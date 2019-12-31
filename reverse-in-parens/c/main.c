#include <stdio.h>
#include <stdlib.h>

char * reverse_in_parens(const char * text);
char * generate_random_str(char * buf, int len);

int main(int argc, char ** argv){
    if(argc != 2){
        printf("\tUsage: reverse_in_parens \"text\"\n");
        return 1;
    }

    char * out = reverse_in_parens(argv[1]);
    printf("\t%s\n", out);
    free(out);

    return 0;
}