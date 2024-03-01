let s=["ad", "bd", "aaab", "baa", "badab"];
let a="ab"
a=a.split("")
let count =0;
for(let i=0;i<s.length;i++){
    let temp=s[i];
    let flag=0;
    temp=temp.split("")
    for(let j=0;j<temp.length;j++){
        if(!a.includes(temp[j])){
            flag=0;
            break;
        }
        else{
            flag=1;
        }
    }
    if (flag){
        count++
    }
}

console.log(count)