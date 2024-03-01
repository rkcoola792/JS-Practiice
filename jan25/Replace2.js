let s = "a1c1e1";
//for(int i=1;i<s.length();i+=2) s[i]=s[i-1]+s[i]-'0'
s=s.split("")

for(let i=0;i<s.length;i++){
    let ch=s[i]
    if(ch="0" && ch<="9"){
        s.splice(i,1,s[i-1].charCodeAt)
    }
}
let ch="a"
console.log()