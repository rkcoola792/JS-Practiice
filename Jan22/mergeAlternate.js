let a= "abcd";
let b= "pq";
let res=[];

a=a.split("")
b=b.split("")
let i=0;
let j=0;
while(i<a.length && j<b.length){
    res.push(a[i++])
    res.push(b[j++])
}

if(j<b.length){

    while(j<b.length)
    res.push(b[j++])
}

if(i<a.length){

    while (i < a.length) res.push(a[i++]);
}

console.log(res.join(""))