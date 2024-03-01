let s="Bob hit a ball the hit BALL flew far after it was hit";
console.log(s)
s=s.toLowerCase().split(" ")
let obj={};

for(let a of s){
if(!obj[a]){
    
    obj[a]=1;
}
else{
    obj[a]++
}
}
obj.hit=0
let max=-1
let k=""
for(let x of Object.keys(obj)){
if(obj[x]>max){
    max=obj[x]
    k=x;
}
}

console.log(k )