#include <bits/stdc++.h>

using namespace std;
#define endl "\n"

void rec(int n)
{
    cout << n << endl;
    if (n < 0)
    {
        return;
    }
    rec(n - 1);
    rec(n - 2);
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    // Write your code from here
    rec(10);
    return 0;
}

// my bad habits
// 1) Masturbation
// 2) Porn
// 3) Long sleep
// 4) Too much Thinking
// 5) Bad Words