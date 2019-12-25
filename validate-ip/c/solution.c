#include <ctype.h>

/* Return 1 is addr is a valid IP address, return 0 otherwise */
int is_valid_ip(const char * addr) {
  int current_val = 0;
  int dots = 0;
  for(const char *c = addr; *c != '\0'; ++c){
    if(isdigit(*c)){
      current_val = (current_val * 10) + (*c - '0');
      if(current_val > 255 || (current_val == 0 && isdigit(*(c+1)))) return 0;
    } else if (*c == '.'){
      if(++dots > 3) return 0;
      current_val = 0;
    } else {
      return 0;
    }
  }
  return (current_val > 255 || dots != 3)? 0 : 1;
};