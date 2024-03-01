
let s = " ";
// if(s==)
// return console.log("1")
s=s.split("");
console.log(s.length)
let max=0;

let obj={}
for(let i=0;i<s.length;){
for(let e of s){
    if(!obj[e])
    obj[e]=1
else
{
    let temp=(Object.entries(obj).length)
    max=Math.max(temp,max)
    obj={}
    break;
}
}
s.shift()
}
console.log(max)