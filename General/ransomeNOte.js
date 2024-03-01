let r="aax";
let m="xaabad"
r=r.split("").sort()
m=m.split("").sort()
let j;
for(let i=0;i<r.length;){
    for( j=0;j<m.length;){
        if(r[i]==m[j]){
            i++;j++;
        }
        else{
        j++;
        }
    }
    if(i==r.length){
        return console.log("true")
    }
    if(j==m.length){
return console.log("false");
    }
}

