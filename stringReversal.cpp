#include<bits/stdc++.h>

using namespace std;
#define endl "\n"

string reverse(string name){
    if ( name.length() == 0){
        return "";
    }
    string temp;
    for(int i = 0 ; i < name.length()  -1 ; i++){
        temp += name[i];
    }
    
    return name[name.length() -1] + reverse(temp);
}

int recursion(int ya){
    printf("RECURSION~!!!");
    return recursion(ya);
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    recursion(34);
    // Write your code from here
//     string nothing = "aryan";
//     string temp;
    
// cout << nothing;

// cout << reverse("Aryan");
    return 0;
}