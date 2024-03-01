let s = "thequickbrownfoxjumpsoverthelazydog";
let a="Hello how are you Contestant";
a=a.split(" ")
a.length=4
console.log(a)

s=s.split("")
let obj={}
for(let e of s){
    if(!obj[e]){
        obj[e]=1;
    }
    else{
        obj[e]++
    }
}

console.log(Object.entries(obj).length==26)
