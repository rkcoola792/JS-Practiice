// Example 1:

// Input: n = 7
// Output: 21
// Explanation: Numbers in the range [1, 7] that are divisible by 3, 5, or 7 are 3, 5, 6, 7. The sum of these numbers is 21.
// Example 2:

// Input: n = 10
// Output: 40
// Explanation: Numbers in the range [1, 10] that are divisible by 3, 5, or 7 are 3, 5,

let n=9;
let arr=[];

for(let i=1;i<=n;i++){
    arr.push(i)
}

console.log(arr)
let sum=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%3==0 || arr[i]%5==0 || arr[i]%7==0 ){
        sum+=arr[i]
    }
}

console.log(sum)