let s=  "Let's take LeetCode contest"

s=s.split(" ")
console.log(s)

for(let i=0;i<s.length;i++){
    let temp=s[i];
    temp=temp.split("").reverse().join("")
    s.splice(i,1,temp)
}

console.log(s.join(" "))