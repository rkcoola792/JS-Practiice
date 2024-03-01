let s = "a1b2c3d4e1";
s=s.split("")
let res=[];

for(let i=1;i<s.length;i++){
    let ch=s[i]
    if(ch>="0" && ch<="9"){
        while(ch>0){
            res.push(s[i-1])
            ch--
        }
    }
    
}

console.log(res.join(""))