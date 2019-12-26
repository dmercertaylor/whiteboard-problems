#include <stdio.h>
#include <stdlib.h>
#include <string.h>

static int charcmp(const void *a, const void *b){
  return *(char *) a < *(char *) b;
}

unsigned long long next_smaller_number(unsigned long long n){
    char out[64];
    sprintf(out, "%llu", n);
    int out_len = strlen(out);
    for(int i = out_len - 2; i >= 0; i--){
        if(out[i] > out[i + 1]){
            for(int z = out_len - 1; z > i; z--){
                if(out[i] > out[z] && !(i == 0 && out[z] == '0')){
                    char tmp = out[i];
                    out[i] = out[z];
                    out[z] = tmp;
                    qsort(out + i+1, out_len - i - 1, sizeof(out[i]), charcmp);
                    return strtoull(out, (char **) NULL, 10);
                }
            }
        }
    }
    return -1;
}