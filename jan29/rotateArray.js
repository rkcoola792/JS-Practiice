let arr=[1,2,3,4,5,6]
let k=3;
let temp=[];
for(let i=0;i<arr.length;i++){
    temp[(i+k)%arr.length]=arr[i]
}

console.log(temp)