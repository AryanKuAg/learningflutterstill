#include<bits/stdc++.h>

using namespace std;
#define endl "\n"

bool palindrome(string name){
    char first = name[0];
    char sec = name[name.length() - 1] ;

    if (name.length() <= 0){
        return false;
    }
// kaise batau kaise, tera mere jaha le chalu mai waha koi mujko na tujse milade
    if (name.length() == 1){
        return true;
    }
    string temp ;
    if ( first == sec){
        for ( int i = 1 ; i < name.length() - 1; i++){
            temp += name[i];
        }
        if ( palindrome(temp)){
            return true;
        }
       
    }

    return false;
}


int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    // Write your code from here
    cout << palindrome("rracecarr");
    return 0;
}