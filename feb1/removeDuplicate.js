let s = "cbacdcbc";
s=s.split("")

for(let i=0;i<s.length;){
    if(s.lastIndexOf(s[i])!==s.indexOf(s[i])){
        s.splice(s.indexOf(s[i]),1)
    }
    else i++
}

console.log(s.join(""))