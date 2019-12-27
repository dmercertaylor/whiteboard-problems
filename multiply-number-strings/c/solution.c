#include <stdio.h>
#include <stdlib.h>
#include <string.h>

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
    while(*a == '0' && a[1] != '\0') a++;
    while(*b == '0' && b[1] != '\0') b++;

    int l_len = strlen(a), s_len = strlen(b);
    char *l = a, *s = b;

    if(l_len < s_len){
        int tmp = l_len;
        l_len = s_len; s_len = tmp;
        l = b; s = a;
    }

    char *out = calloc(l_len+s_len + 1, 1);
    int i, j, carry = 0;

    for(i = 0; i < l_len; i++){
        if(l[l_len - i - 1] != '0'){
            for(j = 0; j < s_len; j++){
                int cur_char = (int) out[i+j];
                if(cur_char == '\0') cur_char = '0';
                cur_char += (l[l_len - i - 1] - '0') * (s[s_len - j - 1] - '0') + carry;
                carry = (cur_char - '0')/10;
                cur_char = ((cur_char-'0') % 10) + '0';
                out[i+j] = (char) cur_char;
            }
            while(carry){
                out[i+(++j)-1] = '0' + carry % 10;
                carry /= 10;
            }
        } else if (out[i] == '\0'){
            out[i] = '0';
        }
    }

    while(out[i+j-2] == '0' && i + j - 2 > 0) out[i+(j--)-2] = '\0';
    return reverse_str(out);
}