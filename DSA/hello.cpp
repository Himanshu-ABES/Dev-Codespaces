#include <iostream>
using namespace std;

int main(){
    int n = 5;
    int arr[] = {1, 2, 4, 5};
    int size = sizeof(arr)/sizeof(arr[0]);
    int sum = 0;
    for(int i = 0; i<size; i++){
        sum += arr[i];
    }
    int actualSum = n * (n + 1) / 2;
    int missingNumber = actualSum - sum;
    cout<<missingNumber<<endl;

    return 0;
}