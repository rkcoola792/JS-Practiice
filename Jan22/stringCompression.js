let chars = ["a", "a", "b", "b", "c", "c", "c"];

let obj={};

for(let a of chars){
if(!obj[a])
obj[a]=1;
else
obj[a]++;
}

console.log(Object.entries(obj).flat().filter(ele=>ele!=1).join("").split(""))