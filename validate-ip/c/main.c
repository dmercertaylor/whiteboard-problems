#include <stdio.h>

int is_valid_ip(const char * addr);

int main(int argc, char ** argv){
    if(argc < 2){
        fprintf(stderr, "usage: validate_ip ip_address\n");
        return 1;
    }
    if(is_valid_ip(argv[1])){
        printf("IP is valid\n");
        return 0;
    } else {
        printf("IP is not valid\n");
        return 1;
    }
}