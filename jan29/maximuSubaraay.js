let arr=[1,-3,4,7,-1]
let sum=0;let maxi=arr[0]

for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
    maxi=Math.max(maxi,sum)
    if(sum<0){
        sum=0;
    }
  
}

console.log(maxi)