let k=3
let arr=[1,2,3,4,5,6,7,8,9,10]
arr=arr.sort()
let l=0;
let r=arr.length-1
let mid;
while(l<=r){
    mid=Math.abs((l+r)/2)
    if(arr[mid]==k)
    return console.log("element present at",mid)

    if(arr[mid]<k)
    l=mid+1
else
r=mid-1
}

