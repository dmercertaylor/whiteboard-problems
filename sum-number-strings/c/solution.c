#include <string.h>
#include <stdlib.h>
#include <stdio.h>

static char *reverse_str(char *a){
  int a_len = strlen(a);
  for(int i=0; i<a_len/2; i++){
    char tmp = a[i];
    a[i] = a[a_len - 1 - i];
    a[a_len - 1 -i] = tmp;
  }
  return a;
}

char * strsum(const char *a, const char *b){
    while(*a == '0') a++;
    while(*b == '0') b++;

    int a_len = strlen(a), b_len = strlen(b), carry = 0;

    if(a_len < b_len){
    int itmp = a_len;
    a_len = b_len; b_len = itmp;
    const char *ctmp = a;
    a = b; b = ctmp;
    }

    if(a_len == 0 && b_len == 0){
        char * out = malloc(a_len + 1);
        *out = '0'; out[1] = '\0';
        return out;
    }

    const char *l = a + a_len - 1, *s = b + b_len - 1;
    char *out = malloc(a_len + 1);
    char *o = out;

    while(l >= a){
        if(s >= b) *o = *l-- + *s-- + carry - '0';
        else *o = *l-- + carry;
        if(*o > '9'){
            *o -= 10;
            carry = 1;
        } else {
            carry = 0;
        }
        o++;
    }
    if(carry) *o++ = '1';
    *o++ = '\0';
    return reverse_str(out);
}