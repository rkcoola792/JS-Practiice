let words = ["aba", "aabb", "abcd", "bac", "aabc"];

for(let i=0;i<words.length;i++){
    words[i]=[...new Set(words[i].split(""))].sort().join("");
}

console.log(words)
let count=0;
for(let i=0;i<words.length;i++){
    for(let j=0;j<words.length;j++){
        if(j==i){
            continue;
        }
        else if(words[i]==words[j]){
            count++;
        }
    }
}

console.log(Math.abs(count/2))