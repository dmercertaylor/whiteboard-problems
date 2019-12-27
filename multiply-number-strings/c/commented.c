#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Helper function to reverse strings
// (strrev is nonstandard, so I won't use it).
static char *reverse_str(char *a){
    int a_len = strlen(a);
    for(int i=0; i<a_len/2; i++){
        char tmp = a[i];
        a[i] = a[a_len - 1 - i];
        a[a_len - 1 -i] = tmp;
    }
    return a;
}

char *multiply(char *a, char *b) {
    // Skip 0s at start of inputs
    while(*a == '0' && a[1] != '\0') a++;
    while(*b == '0' && b[1] != '\0') b++;

    // get lens so we don't call strlen a bunch of times
    int l_len = strlen(a), s_len = strlen(b);
    char *l = a, *s = b;

    // make sure l, s, and lens point to the longer
    // and shorter strings respectively. This makes
    // it easier to be sure we are pointing to valid
    // memory later on.
    if(l_len < s_len){
        int tmp = l_len;
        l_len = s_len; s_len = tmp;
        l = b; s = a;
    }

    // allocate space for our output.
    char *out = calloc(l_len+s_len + 1, 1);
    // initialize iterators, and int for carried
    // digits if the product of two digits > 9.
    int i, j, carry = 0;

    // iterate through longer string
    for(i = 0; i < l_len; i++){
        // This check isn't strictly necessary
        // but saves iterations.
        if(l[l_len - i - 1] != '0'){
            // iterate through smaller array
            for(j = 0; j < s_len; j++){
                // Since we may end up doing arithmatic with values > 255,
                // we cast the current digit of output we are working with
                // to an int.
                int cur_char = (int) out[i+j];
                // Null means we haven't seen this digit yet, so set it to 0.
                if(cur_char == '\0') cur_char = '0';
                // actually multiply the digits, add carryover from previous digits
                cur_char += (l[l_len - i - 1] - '0') * (s[s_len - j - 1] - '0') + carry;
                // set carryover
                carry = (cur_char - '0')/10;
                // remove digits after the ones place
                cur_char = ((cur_char-'0') % 10) + '0';
                // cast back to our output array.
                out[i+j] = (char) cur_char;
            }
            // Put leftover carryover at the end of our output array
            while(carry){
                out[i+(++j)-1] = '0' + carry % 10;
                carry /= 10;
            }
        } else if (out[i] == '\0'){
            // if our current digit from the longer string is 0,
            // skip iterating over the shorter string and set the
            // relevant output to 0.
            out[i] = '0';
        }
    }
    // remove excess 0s from end of output (may occur if user
    // feeds in a bunch of 0s with no value). This is why
    // we declared the iterators outside of the for loops.
    while(out[i+j-2] == '0' && i + j - 2 > 0) out[i+(j--)-2] = '\0';
    return reverse_str(out);
}