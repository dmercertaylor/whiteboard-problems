#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// character comparison function for qsort
static int charcmp(const void *a, const void *b){
  return *(char *) a < *(char *) b;
}

unsigned long long next_smaller_number(unsigned long long n){
    // Convert n to a string, stored in out
    char out[64];
    sprintf(out, "%llu", n);

    int out_len = strlen(out);

    // Iterate backwards through out, starting 2nd from the last digit
    for(int i = out_len - 2; i >= 0; i--){
        // check isn't strictly necessary but skips pointless iterations
        if(out[i] > out[i + 1]){
            // iterate backwards through out, starting at the last digit
            // the goal here is to find the furthes left digit with a lower
            // value than out[i].
            for(int z = out_len - 1; z > i; z--){
                // extra check after && is just to be sure we aren't putting 0
                // at the start of the number.
                if(out[i] > out[z] && !(i == 0 && out[z] == '0')){
                    // swap out[i] and out[z], then sort values after
                    // out[i] descending.
                    char tmp = out[i];
                    out[i] = out[z];
                    out[z] = tmp;
                    qsort(out + i+1, out_len - i - 1, sizeof(out[i]), charcmp);
                    // return unsigned long long version of out.
                    return strtoull(out, (char **) NULL, 10);
                }
            }
        }
    }
    // default if digits are in ascending order initially
    // NOTE: I don't like returning -1 on unsigned personally,
    // and would use 0 myself, but the question specified this.
    return -1;
}