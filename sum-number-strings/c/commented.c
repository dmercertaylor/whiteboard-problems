#include <string.h>
#include <stdlib.h>
#include <stdio.h>

// Helper function that reverses strings.
static char *reverse_str(char *a){
    int a_len = strlen(a);
    for(int i=0; i<a_len/2; i++){
        char tmp = a[i];
        a[i] = a[a_len - 1 - i];
        a[a_len - 1 -i] = tmp;
    }
    return a;
}

char * strsum(const char *a, const char *b)
{
    // Skip 0s at start
    while(*a == '0') a++;
    while(*b == '0') b++;

    // a_len and b_len so we only need 2 strlen calls.
    int a_len = strlen(a), b_len = strlen(b);

    // if b is longer than a, swap them.
    if(a_len < b_len){
        int itmp = a_len;
        a_len = b_len; b_len = itmp;
        const char *ctmp = a;
        a = b; b = ctmp;
    }

    // if both strings are empty, return "0"
    if(a_len == 0 && b_len == 0){
        // Unfortunately, we need to dynamically allocate this,
        // since the program running this might crash if
        // it tried to free a static string.
        char * out = malloc(a_len + 1);
        *out = '0'; out[1] = '\0';
        return out;
    }

    // *l and *s will point to the last characters in a and b.
    const char *l = a + a_len - 1, *s = b + b_len - 1;
    // Allocate space for output
    char *out = malloc(a_len + 1);
    // o will point to the character we are writing to.
    char *o = out;
    // variable to tell if previous digis added to more than 10.
    int carry = 0;

    // while l points to a char in a (l and s will iterate backwards)
    while(l >= a){
        // if s is pointing to a char in b, write a, b, and carry.
        if(s >= b) *o = *l-- + *s-- + carry - '0';
        // else just write a and carry.
        else *o = *l-- + carry;
        // if we just wrote a value larger than 9, subtract 10 and set carry to 1
        if(*o > '9'){
            *o -= 10;
            carry = 1;
        } else {
            carry = 0;
        }
        // move our write head forwards once.
        o++;
    }
    // If a value is left in carry, write it.
    if(carry) *o++ = '1';
    // Add null terminator.
    *o = '\0';
    return reverse_str(out);
}