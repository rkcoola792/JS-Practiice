let words = ["abc", "bcd", "aaaa", "cbc"]
let x = "a";
let res=[]
for(let i=0;i<words.length;i++){
    if(words[i].includes(x)){
        res.push(i)
    }
}

console.log(res)
