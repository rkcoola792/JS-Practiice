let s="I am a macho man"

//reverse 1
console.log(s.split(" ").reverse().join(" "))

//reverse 2
console.log(s.split("").reverse().join(""))

//reverse 3
console.log(s.split("").reverse().join("").split(" ").reverse().join(" "))

//reverse 4
let a = s.split("").filter(ele=>ele!=" ").reverse();
s=s.split("")

for(let i=0;i<s.length;i++){
    if(s[i]==" "){
        a.splice(i,0," ")
    }
}
console.log(a.join(""))

