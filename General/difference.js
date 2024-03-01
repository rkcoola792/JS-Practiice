let s="";
let c="a";

s=s.split("").sort()
c=c.split("").sort()

for(let i=0;i<=s.length;i++){
if(s[i]==s.length){
    return console.log(c[c.length-1])
}
if(s[i]!=c[i]){
    return console.log(c[i])
}
if(s[i]==c[i]){
continue
}
}
