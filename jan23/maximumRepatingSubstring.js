let s = "aaabaaaabaaabaaaabaaaabaaaabaaaaba";
let w = "aaaba";
let c=0;

for(let i=0;i<s.length;){
if(s.substring(i,i+w.length)===w){
        c++
        i+=w.length;
}
else
i++
}
console.log(c)