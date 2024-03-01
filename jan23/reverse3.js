let s = "Let's take LeetCode contest"

let k=s.split("").reverse().filter(ele=>ele!=" ")
for(let i=0;i<s.length;i++){
if(s[i]==" "){
    k.splice(i,0," ")
}
}
console.log(k.join(""))